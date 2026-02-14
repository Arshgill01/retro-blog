export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-12 border-b border-retro-gray pb-8">
        <div className="font-mono text-xs text-retro-muted mb-4">
          <span className="text-retro-cyan">cat</span> about.txt
        </div>

        <h1 className="font-mono text-3xl md:text-4xl font-bold text-white">
          About This Blog
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* Bio Section */}
        <section className="font-mono">
          <h2 className="text-retro-cyan mb-4 flex items-center gap-2">
            <span className="text-retro-magenta">$</span> whoami
          </h2>
          <p className="text-retro-text leading-relaxed pl-4 border-l-2 border-retro-gray">
            I&apos;m a developer who loves clean code, terminal aesthetics, and
            the beauty of functional design. This blog is my digital garden – a
            place to share thoughts, tutorials, and experiments.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="font-mono">
          <h2 className="text-retro-cyan mb-4 flex items-center gap-2">
            <span className="text-retro-magenta">$</span> uname -a
          </h2>
          <div className="pl-4 border-l-2 border-retro-gray space-y-2">
            <div className="text-retro-muted">
              <span className="text-retro-blue">OS:</span> macOS / Linux
            </div>
            <div className="text-retro-muted">
              <span className="text-retro-blue">Editor:</span> VS Code / Neovim
            </div>
            <div className="text-retro-muted">
              <span className="text-retro-blue">Shell:</span> zsh
            </div>
            <div className="text-retro-muted">
              <span className="text-retro-blue">Theme:</span> Dark retro
              terminal
            </div>
          </div>
        </section>

        {/* Tech Stack Details */}
        <section className="font-mono">
          <h2 className="text-retro-cyan mb-4 flex items-center gap-2">
            <span className="text-retro-magenta">$</span> ls -la tech-stack/
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
            {[
              {
                name: "Next.js 14",
                desc: "React framework",
                color: "text-retro-cyan",
              },
              {
                name: "TypeScript",
                desc: "Type safety",
                color: "text-retro-blue",
              },
              {
                name: "Tailwind CSS",
                desc: "Styling",
                color: "text-retro-magenta",
              },
              {
                name: "Markdown",
                desc: "Content format",
                color: "text-retro-yellow",
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className="border border-retro-gray rounded p-4 hover:border-retro-cyan/50 transition-colors"
              >
                <div className={`font-bold ${tech.color}`}>{tech.name}</div>
                <div className="text-retro-muted text-sm">{tech.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="font-mono">
          <h2 className="text-retro-cyan mb-4 flex items-center gap-2">
            <span className="text-retro-magenta">$</span> ping -c 1 contact
          </h2>
          <div className="pl-4 border-l-2 border-retro-gray">
            <p className="text-retro-muted mb-4">
              Want to get in touch? Here are some ways to reach me:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Arshgill01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-retro-gray rounded hover:border-retro-cyan hover:text-retro-cyan transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-retro-gray rounded hover:border-retro-blue hover:text-retro-blue transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter/X
              </a>

              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 border border-retro-gray rounded hover:border-retro-magenta hover:text-retro-magenta transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
