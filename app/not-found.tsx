import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <div className="crt-effect p-12 border-4 border-neonPink bg-deepBlack/90">
          <h1 className="font-pixel text-6xl text-neonPink mb-8 neon-glow">
            GAME OVER
          </h1>

          <p className="font-arcade text-3xl text-neonYellow mb-4">
            ERROR 404
          </p>

          <p className="font-arcade text-2xl text-screenGreen mb-8 animate-blink">
            &gt; INSERT COIN TO CONTINUE
          </p>

          <p className="text-lg mb-8">
            The page you&apos;re looking for has been erased from the high score board.
          </p>

          <Link
            href="/about"
            className="arcade-button bg-neonCyan text-deepBlack border-neonCyan inline-block"
          >
            RETURN HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
