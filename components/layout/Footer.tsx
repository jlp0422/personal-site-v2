export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-sbtbCyan bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="font-body text-sm text-darkText mb-2">
            Built with Next.js 15 · Powered by 80s vibes ✨
          </p>
          <p className="font-heading text-xs text-sbtbPurple">
            © {currentYear} JEREMY PHILIPSON
          </p>
          <p className="font-body text-xs text-sbtbPink/70 mt-2">
            Saved by the Bell theme · Because the 80s never went out of style
          </p>
        </div>
      </div>
    </footer>
  );
}
