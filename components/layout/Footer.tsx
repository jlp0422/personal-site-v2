export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-neonCyan bg-deepBlack/95 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="font-arcade text-sm text-screenGreen mb-2">
            Built with Next.js 15 · Powered by retro vibes
          </p>
          <p className="font-pixel text-xs text-screenGreen/70">
            © {currentYear} JEREMY PHILIPSON
          </p>
          <p className="font-arcade text-xs text-neonPink/50 mt-2">
            &gt; THANKS FOR PLAYING_
          </p>
        </div>
      </div>
    </footer>
  );
}
