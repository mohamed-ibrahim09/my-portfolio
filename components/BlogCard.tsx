import Link from 'next/link'

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  readTime: string
  slug: string
}

export function BlogCard({
  title,
  excerpt,
  category,
  readTime,
  slug,
}: BlogCardProps) {
  return (
    <article className="border border-border bg-card p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="inline-block px-2 py-1 text-xs border border-primary text-primary bg-primary/5">
          {category}
        </span>
        <span className="inline-block px-2 py-1 text-xs text-muted-foreground font-mono">
          {readTime}
        </span>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-foreground text-sm mb-4 leading-relaxed">
        {excerpt}
      </p>

      <Link
        href={`/blog/${slug}`}
        className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-mono"
      >
        <span>Read the blog</span>
        <span>→</span>
      </Link>
    </article>
  )
}
