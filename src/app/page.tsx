import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="border-b border-retro-gray pb-8">
        <div className="font-mono space-y-4">
          <div className="text-retro-muted text-sm">
            <span className="text-retro-cyan">const</span>
            <span className="text-white"> blog </span>
            <span className="text-retro-cyan">=</span>
            <span className="text-retro-magenta"> {'{'} </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white pl-4">
            Thoughts, ideas, <br />
            <span className="text-gradient">and code snippets</span>
          </h1>
          
          <div className="text-retro-muted text-sm">
            <span className="text-retro-magenta">{'}'}</span>
            <span className="text-white">;</span>
          </div>
        </div>
        
        <p className="mt-6 text-retro-muted max-w-2xl leading-relaxed">
          A collection of writings about software engineering, technology, 
          and the occasional random thought. Written in markdown, built with code.
        </p>
      </section>

      {/* Blog Posts List */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-mono text-lg text-retro-cyan">
            <span className="text-retro-muted">$</span> ls -la posts/
          </h2>
          <div className="flex-1 h-px bg-retro-gray"></div>
        </div>

        {posts.length === 0 ? (
          <div className="font-mono text-retro-muted py-12 text-center border border-dashed border-retro-gray rounded-lg">
            <p className="text-retro-magenta mb-2">No posts found</p>
            <p className="text-sm">Add .md files to content/posts/ to get started</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article 
                key={post.slug}
                className="group border border-retro-gray rounded-lg p-6 hover:border-retro-cyan/50 transition-all duration-300 hover:glow-border"
              >
                <Link href={`/posts/${post.slug}`} className="block">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs text-retro-muted">
                          [{String(index + 1).padStart(2, '0')}]
                        </span>
                        <h3 className="font-mono text-xl font-semibold text-white group-hover:text-retro-cyan transition-colors">
                          {post.title}
                        </h3>
                      </div>
                      
                      <p className="text-retro-muted text-sm mb-3 line-clamp-2 pl-8">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 pl-8">
                        <span className="font-mono text-xs text-retro-blue">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                        
                        <span className="font-mono text-xs text-retro-muted">
                          {post.readingTime} min read
                        </span>
                        
                        {post.tags.length > 0 && (
                          <div className="flex items-center gap-2">
                            {post.tags.map((tag) => (
                              <span 
                                key={tag}
                                className="font-mono text-xs px-2 py-0.5 bg-retro-gray rounded text-retro-cyan"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-retro-muted group-hover:text-retro-cyan transition-colors">
                      <svg 
                        className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="border-t border-retro-gray pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-retro-gray rounded p-4 text-center">
            <div className="font-mono text-2xl font-bold text-retro-cyan">
              {posts.length}
            </div>
            <div className="font-mono text-xs text-retro-muted mt-1">posts</div>
          </div>
          
          <div className="border border-retro-gray rounded p-4 text-center">
            <div className="font-mono text-2xl font-bold text-retro-magenta">
              {posts.reduce((acc, post) => acc + post.readingTime, 0)}
            </div>
            <div className="font-mono text-xs text-retro-muted mt-1">min read</div>
          </div>
          
          <div className="border border-retro-gray rounded p-4 text-center">
            <div className="font-mono text-2xl font-bold text-retro-blue">
              {new Set(posts.flatMap(p => p.tags)).size}
            </div>
            <div className="font-mono text-xs text-retro-muted mt-1">tags</div>
          </div>
          
          <div className="border border-retro-gray rounded p-4 text-center">
            <div className="font-mono text-2xl font-bold text-retro-yellow">
              ∞
            </div>
            <div className="font-mono text-xs text-retro-muted mt-1">ideas</div>
          </div>
        </div>
      </section>
    </div>
  );
}
