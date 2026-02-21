import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <div className="bg-white border-4 border-sbtbPink p-12 memphis-border">
          <h1 className="font-heading text-7xl md:text-9xl text-sbtbPurple mb-6"
              style={{ textShadow: '6px 6px 0px rgba(255, 107, 157, 0.3)' }}>
            404
          </h1>

          <p className="font-accent text-3xl text-sbtbOrange mb-4">
            Whoa, Totally Bogus!
          </p>

          <p className="font-body text-xl text-darkText mb-8">
            This page is like... totally not here, dude! 🤙
          </p>

          <p className="font-body text-lg text-darkText/70 mb-8">
            Looks like this page went to detention and never came back.
          </p>

          <Link href="/">
            <button className="sbtb-button bg-sbtbCyan border-sbtbCyan text-white hover:bg-sbtbPurple hover:border-sbtbPurple">
              Take Me Home
            </button>
          </Link>
        </div>

        {/* Fun 80s decorations */}
        <div className="mt-8 flex justify-center gap-4 text-4xl">
          <span className="animate-bounce">🎸</span>
          <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>📻</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
        </div>
      </div>
    </main>
  );
}
