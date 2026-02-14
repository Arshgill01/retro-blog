import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs, markdownToHtml } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Retro Blog`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const contentHtml = await markdownToHtml(post.content);
  
  return (
    <article className="max-w-3xl mx-auto">
      {/* Back Link */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 font-mono text-sm text-retro-muted hover:text-retro-cyan transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        cd ..
      </Link>
      
      {/* Post Header */}
      <header className="mb-12 border-b border-retro-gray pb-8">
        <div className="font-mono text-xs text-retro-muted mb-4">
          <span className="text-retro-cyan">file:</span> {post.slug}.md
        </div>
        
        <h1 className="font-mono text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
          <span className="text-retro-blue">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          
          <span className="text-retro-muted">•</span>
          
          <span className="text-retro-magenta">
            {post.readingTime} min read
          </span>
          
          {post.tags.length > 0 && (
            <>
              <span className="text-retro-muted">•</span>
              <div className="flex items-center gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-0.5 bg-retro-gray rounded text-retro-cyan text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>
      
      {/* Post Content */}
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
      
      {/* Post Footer */}
      <footer className="mt-16 pt-8 border-t border-retro-gray">
        <div className="flex items-center justify-between">
          <div className="font-mono text-xs text-retro-muted">
            <span className="text-retro-cyan">EOF</span>
          </div>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-mono text-sm text-retro-muted hover:text-retro-cyan transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            ~
          </Link>
        </div>
      </footer>
    </article>
  );
}
