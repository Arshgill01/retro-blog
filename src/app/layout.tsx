import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retro Blog",
  description: "A dark retro-themed personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {/* Header */}
        <header className="border-b border-retro-gray">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="group">
                <h1 className="font-mono text-2xl font-bold text-white tracking-tight">
                  <span className="text-retro-cyan">~</span>
                  <span className="group-hover:text-retro-cyan transition-colors">/</span>
                  blog
                </h1>
              </Link>
              
              <nav className="flex items-center gap-6">
                <Link 
                  href="/" 
                  className="font-mono text-sm text-retro-muted hover:text-retro-cyan transition-colors"
                >
                  [home]
                </Link>
                <Link 
                  href="/about" 
                  className="font-mono text-sm text-retro-muted hover:text-retro-cyan transition-colors"
                >
                  [about]
                </Link>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-retro-muted hover:text-retro-magenta transition-colors"
                >
                  [github]
                </a>
              </nav>
            </div>
            
            {/* Terminal prompt */}
            <div className="mt-4 font-mono text-xs text-retro-muted">
              <span className="text-retro-cyan">user@blog</span>
              <span className="text-white">:</span>
              <span className="text-retro-blue">~</span>
              <span className="text-white">$ </span>
              <span className="cursor-blink">welcome</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-retro-gray mt-20">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-mono text-xs text-retro-muted">
                <span className="text-retro-cyan">©</span> {new Date().getFullYear()} — built with next.js
              </p>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-retro-muted">
                  <span className="text-retro-magenta">♥</span> markdown
                </span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
