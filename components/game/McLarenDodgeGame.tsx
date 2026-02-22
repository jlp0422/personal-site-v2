'use client';

import { useEffect, useRef, useCallback } from 'react';

// 2026 F1 grid — all non-McLaren teams, real livery colors + driver numbers
const TEAMS = [
  { name: 'Red Bull',      color: '#1E5BC6', accent: '#FFB800', numbers: ['3',  '6']  },
  { name: 'Ferrari',       color: '#E8002D', accent: '#FFFFFF', numbers: ['16', '44'] },
  { name: 'Mercedes',      color: '#00D2BE', accent: '#000000', numbers: ['63', '12'] },
  { name: 'Williams',      color: '#005AFF', accent: '#FFFFFF', numbers: ['23', '55'] },
  { name: 'Alpine',        color: '#0090FF', accent: '#FF87BC', numbers: ['10', '43'] },
  { name: 'Aston Martin',  color: '#006F62', accent: '#CEDC00', numbers: ['14', '18'] },
  { name: 'Haas',          color: '#1A1A1A', accent: '#E8002D', numbers: ['31', '87'] },
  { name: 'Racing Bulls',  color: '#F0F0F0', accent: '#005AFF', numbers: ['30', '41'] },
  { name: 'Audi',          color: '#BB0000', accent: '#FFFFFF', numbers: ['27', '5']  },
  { name: 'Cadillac',      color: '#2A2A2A', accent: '#FFFFFF', numbers: ['11', '77'] },
];

const QUIPS = [
  "Lando would've found the gap.",
  "Stewards are reviewing the incident.",
  "Your engineer is speechless.",
  "The undercut didn't save you.",
  "Even a Safety Car can't help now.",
  "Hamilton never had this problem.",
];

const CANVAS_HEIGHT = 600;
const COLLISION_THRESHOLD = 55;
const PLAYER_Y_RATIO = 0.82;
const BEST_TIME_KEY = 'mclaren-dodge-best';

interface Enemy {
  lane: 0 | 1 | 2;
  y: number;
  teamIndex: number;
  driverNumber: string;
}

interface GameState {
  playerLane: 0 | 1 | 2;
  enemies: Enemy[];
  speed: number;
  spawnTimer: number;
  startTime: number;
  gameOver: boolean;
  survivedMs: number;
  quip: string;
  roadOffset: number;
  animFrameId: number;
}

// Top-down F1 car silhouette — all cars face UP (same direction of travel)
function drawCar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  bodyColor: string,
  accentColor: string,
  number: string,
  isPlayer: boolean
) {
  ctx.save();
  ctx.translate(x, y);
  const d = -1; // all cars face up (direction of travel)

  // Shadow beneath whole car
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 3;

  // ── REAR WING ──────────────────────────────────────────────
  // rear is opposite direction from nose: d * -26 (behind the car)
  const rwY = d * -26;
  ctx.fillStyle = accentColor;
  ctx.fillRect(-19, rwY - 4, 38, 7);          // main plane
  ctx.fillRect(-22, rwY - 6, 3, 11);          // left endplate
  ctx.fillRect( 19, rwY - 6, 3, 11);          // right endplate

  // ── MAIN BODY ──────────────────────────────────────────────
  // Tapered nose + sidepods. All standard-y values are positive=toward nose,
  // multiplied by d so player nose goes up, enemy nose goes down.
  ctx.fillStyle = bodyColor;
  ctx.beginPath();
  const body: [number, number][] = [
    [ -9, -23], // rear left
    [  9, -23], // rear right
    [ 13,  -6], // right sidepod rear
    [ 13,   6], // right sidepod front
    [  7,  17], // right nose shoulder
    [  3,  27], // right nose tip
    [ -3,  27], // left nose tip
    [ -7,  17], // left nose shoulder
    [-13,   6], // left sidepod front
    [-13,  -6], // left sidepod rear
  ];
  ctx.moveTo(body[0][0], body[0][1] * d);
  for (let i = 1; i < body.length; i++) {
    ctx.lineTo(body[i][0], body[i][1] * d);
  }
  ctx.closePath();
  ctx.fill();

  ctx.shadowColor = 'transparent';

  // ── FRONT WING ─────────────────────────────────────────────
  const fwY = d * 31;
  ctx.fillStyle = accentColor;
  ctx.fillRect(-23, fwY - 3, 46, 5);          // main plane
  ctx.fillRect(-23, fwY - 6, 3, 10);          // left endplate
  ctx.fillRect( 20, fwY - 6, 3, 10);          // right endplate

  // ── WHEELS (exposed, top-down ovals) ───────────────────────
  // [x, standard_y] — standard_y positive = toward nose
  const wheels: [number, number][] = [
    [-17, -16], [ 17, -16],   // rear pair
    [-14,  13], [ 14,  13],   // front pair
  ];
  for (const [wx, wy] of wheels) {
    ctx.fillStyle = '#111111';
    ctx.beginPath();
    ctx.ellipse(wx, wy * d, 5, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    // rim highlight
    ctx.strokeStyle = '#555555';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(wx, wy * d, 2.5, 3.5, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  // ── ENGINE COVER STRIPE ─────────────────────────────────────
  ctx.fillStyle = accentColor;
  ctx.globalAlpha = 0.35;
  // stripe from rear toward cockpit along center spine
  ctx.fillRect(-2, d * -21, 4, d * 13);
  ctx.globalAlpha = 1;

  // ── COCKPIT OPENING ─────────────────────────────────────────
  const cockpitY = d * 7;
  ctx.fillStyle = 'rgba(5,5,5,0.85)';
  ctx.beginPath();
  ctx.ellipse(0, cockpitY, 4.5, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── HALO (arch over cockpit, opening toward nose) ───────────
  ctx.strokeStyle = isPlayer ? '#E0E0E0' : '#888888';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  // opening toward front: for player (d=-1) front=up → arc goes through bottom
  // for enemy (d=+1) front=down → arc goes through top
  if (d === -1) {
    ctx.arc(0, cockpitY, 7, 0, Math.PI, false);
  } else {
    ctx.arc(0, cockpitY, 7, Math.PI, 0, false);
  }
  ctx.stroke();

  // ── DRIVER NUMBER (on engine cover) ────────────────────────
  ctx.fillStyle = accentColor;
  ctx.font = `bold ${number.length > 1 ? 10 : 12}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(number, 0, d * -12);

  ctx.restore();
}

function getLaneCenters(canvasWidth: number): [number, number, number] {
  return [canvasWidth * 0.22, canvasWidth * 0.5, canvasWidth * 0.78];
}

function getBestTime(): number {
  if (typeof window === 'undefined') return 0;
  return parseInt(localStorage.getItem(BEST_TIME_KEY) || '0', 10);
}

function setBestTime(ms: number) {
  if (typeof window === 'undefined') return;
  const current = getBestTime();
  if (ms > current) localStorage.setItem(BEST_TIME_KEY, String(ms));
}

function formatTime(ms: number): string {
  return (ms / 1000).toFixed(1) + 's';
}

export function McLarenDodgeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<GameState>({
    playerLane: 1,
    enemies: [],
    speed: 3,
    spawnTimer: 0,
    startTime: 0,
    gameOver: false,
    survivedMs: 0,
    quip: QUIPS[0],
    roadOffset: 0,
    animFrameId: 0,
  });

  const getCanvasWidth = () => {
    if (typeof window === 'undefined') return 400;
    return Math.min(window.innerWidth - 32, 400);
  };

  const initGame = useCallback(() => {
    const s = stateRef.current;
    s.playerLane = 1;
    s.enemies = [];
    s.speed = 3;
    s.spawnTimer = 0;
    s.startTime = Date.now();
    s.gameOver = false;
    s.survivedMs = 0;
    s.quip = QUIPS[Math.floor(Math.random() * QUIPS.length)];
    s.roadOffset = 0;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const s = stateRef.current;
    const lanes = getLaneCenters(W);
    const trackLeft = W * 0.06;
    const trackRight = W * 0.94;
    const trackW = trackRight - trackLeft;

    // Background (off-track)
    ctx.fillStyle = 'var(--color-background, #1a1a2e)';
    ctx.fillRect(0, 0, W, H);

    // Asphalt track
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(trackLeft, 0, trackW, H);

    // Track edge lines
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(trackLeft, 0);
    ctx.lineTo(trackLeft, H);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(trackRight, 0);
    ctx.lineTo(trackRight, H);
    ctx.stroke();

    // Dashed lane dividers
    const dashLen = 30;
    const gapLen = 25;
    ctx.setLineDash([dashLen, gapLen]);
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 2;

    for (let i = 0; i < 2; i++) {
      const laneX = trackLeft + trackW * (i === 0 ? 1 / 3 : 2 / 3);
      ctx.beginPath();
      // Offset for scrolling illusion
      const offset = s.roadOffset % (dashLen + gapLen);
      for (let y = -gapLen + offset; y < H + dashLen; y += dashLen + gapLen) {
        ctx.moveTo(laneX, y);
        ctx.lineTo(laneX, y + dashLen);
      }
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Enemies
    for (const enemy of s.enemies) {
      const ex = lanes[enemy.lane];
      const team = TEAMS[enemy.teamIndex];
      drawCar(ctx, ex, enemy.y, team.color, team.accent, enemy.driverNumber, false);
    }

    // Player
    const playerX = lanes[s.playerLane];
    const playerY = H * PLAYER_Y_RATIO;
    drawCar(ctx, playerX, playerY, '#FF8000', '#FFFFFF', '4', true);

    // HUD - time
    if (!s.gameOver && s.startTime > 0) {
      const elapsed = Date.now() - s.startTime;
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillRect(W / 2 - 45, 10, 90, 28);
      ctx.fillStyle = '#FF8000';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(formatTime(elapsed), W / 2, 24);
    }

    // Game over overlay
    if (s.gameOver) {
      ctx.fillStyle = 'rgba(0,0,0,0.78)';
      ctx.fillRect(0, 0, W, H);

      const cx = W / 2;

      // "GAME OVER"
      ctx.fillStyle = '#E8002D';
      ctx.font = `bold ${W > 360 ? 42 : 34}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('GAME OVER', cx, H * 0.28);

      // McLaren orange accent line
      ctx.strokeStyle = '#FF8000';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx - 80, H * 0.35);
      ctx.lineTo(cx + 80, H * 0.35);
      ctx.stroke();

      // Survived time
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px monospace';
      ctx.fillText(`Time: ${formatTime(s.survivedMs)}`, cx, H * 0.44);

      // Best time
      const best = getBestTime();
      ctx.fillStyle = '#FFB800';
      ctx.font = '14px monospace';
      ctx.fillText(`Best: ${best > 0 ? formatTime(best) : '--'}`, cx, H * 0.52);

      // Quip
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.font = `italic 13px serif`;
      ctx.fillText(`"${s.quip}"`, cx, H * 0.61);

      // Play Again button
      const btnW = 160;
      const btnH = 44;
      const btnX = cx - btnW / 2;
      const btnY = H * 0.72 - btnH / 2;

      ctx.fillStyle = '#FF8000';
      ctx.beginPath();
      ctx.roundRect(btnX, btnY, btnW, btnH, 6);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('PLAY AGAIN', cx, H * 0.72);
    }
  }, []);

  const gameLoop = useCallback(() => {
    const s = stateRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = canvas.width;
    const H = canvas.height;

    if (!s.gameOver) {
      // Speed ramp
      s.speed += 0.0015;

      // Scroll road markings
      s.roadOffset += s.speed;

      // Spawn enemies
      const spawnInterval = Math.max(40, 90 - s.speed * 6);
      s.spawnTimer++;
      if (s.spawnTimer >= spawnInterval) {
        s.spawnTimer = 0;
        s.enemies.push({
          lane: (Math.floor(Math.random() * 3)) as 0 | 1 | 2,
          y: -90,
          ...(() => { const ti = Math.floor(Math.random() * TEAMS.length); const t = TEAMS[ti]; return { teamIndex: ti, driverNumber: t.numbers[Math.floor(Math.random() * t.numbers.length)] }; })(),
        });
      }

      // Move enemies
      for (const enemy of s.enemies) {
        enemy.y += s.speed;
      }

      // Remove off-screen enemies
      s.enemies = s.enemies.filter(e => e.y < H + 100);

      // Collision detection
      const lanes = getLaneCenters(W);
      const playerY = H * PLAYER_Y_RATIO;
      for (const enemy of s.enemies) {
        if (enemy.lane === s.playerLane) {
          const dy = Math.abs(enemy.y - playerY);
          if (dy < COLLISION_THRESHOLD) {
            s.gameOver = true;
            s.survivedMs = Date.now() - s.startTime;
            setBestTime(s.survivedMs);
            break;
          }
        }
      }
    }

    draw();

    s.animFrameId = requestAnimationFrame(gameLoop);
  }, [draw]);

  const handleClick = useCallback((e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const s = stateRef.current;

    const rect = canvas.getBoundingClientRect();
    const touch = 'changedTouches' in e ? (e as unknown as TouchEvent).changedTouches[0] : null;
    const clientX = touch ? touch.clientX : (e as MouseEvent).clientX;
    const x = clientX - rect.left;
    const W = canvas.width;
    const H = canvas.height;

    if (s.gameOver) {
      // Check Play Again button
      const btnW = 160;
      const btnH = 44;
      const btnX = W / 2 - btnW / 2;
      const btnY = H * 0.72 - btnH / 2;
      const clientY = touch ? touch.clientY : (e as MouseEvent).clientY;
      const y = clientY - rect.top;
      if (x >= btnX && x <= btnX + btnW && y >= btnY && y <= btnY + btnH) {
        initGame();
      }
      return;
    }

    // Lane change by tap
    if (x < W / 2) {
      s.playerLane = Math.max(0, s.playerLane - 1) as 0 | 1 | 2;
    } else {
      s.playerLane = Math.min(2, s.playerLane + 1) as 0 | 1 | 2;
    }
  }, [initGame]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    const s = stateRef.current;
    if (s.gameOver) return;
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      s.playerLane = Math.max(0, s.playerLane - 1) as 0 | 1 | 2;
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      s.playerLane = Math.min(2, s.playerLane + 1) as 0 | 1 | 2;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = getCanvasWidth();
    canvas.height = CANVAS_HEIGHT;

    const onResize = () => {
      canvas.width = getCanvasWidth();
    };
    window.addEventListener('resize', onResize);

    initGame();

    const s = stateRef.current;
    s.animFrameId = requestAnimationFrame(gameLoop);

    window.addEventListener('keydown', handleKey);
    canvas.addEventListener('click', handleClick as EventListener);
    canvas.addEventListener('touchstart', handleClick as EventListener, { passive: true });

    return () => {
      cancelAnimationFrame(s.animFrameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', handleKey);
      canvas.removeEventListener('click', handleClick as EventListener);
      canvas.removeEventListener('touchstart', handleClick as EventListener);
    };
  }, [initGame, gameLoop, handleKey, handleClick]);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1
        className="text-3xl md:text-4xl tracking-widest"
        style={{ fontFamily: 'var(--font-heading)', color: '#FF8000' }}
      >
        MCLAREN DODGE
      </h1>
      <p className="text-sm" style={{ color: 'var(--color-textMuted)', fontFamily: 'var(--font-body)' }}>
        ← → or A/D to overtake · Survive as long as you can
      </p>
      <canvas
        ref={canvasRef}
        className="block cursor-pointer"
        style={{
          border: '3px solid #FF8000',
          boxShadow: '0 0 24px rgba(255, 128, 0, 0.3)',
          maxWidth: '100%',
          touchAction: 'none',
        }}
      />
      <p className="text-xs" style={{ color: 'var(--color-textMuted)', fontFamily: 'var(--font-body)' }}>
        Mobile: tap left/right half to overtake
      </p>
    </div>
  );
}
