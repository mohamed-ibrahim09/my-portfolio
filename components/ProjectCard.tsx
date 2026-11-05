import Image from 'next/image'
import { Github, ChevronRight } from 'lucide-react'
import type { Project } from '@/lib/data'

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const { name, summary, details, tags, github, image, note, category } = project

  return (
    <article className="terminal-card !p-0 flex flex-col group overflow-hidden">
      {image && (
        <a
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-[16/9] bg-white/95 border-b border-border overflow-hidden"
          aria-label={`Open the ${name} diagram full size`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={priority}
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </a>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-[#e2e8f0] group-hover:text-primary transition-colors">{name}</h3>
          <span className="term-badge text-primary/80 shrink-0">{category}</span>
        </div>

        <p className="text-foreground leading-relaxed mb-4">{summary}</p>

        <details className="mb-4 text-sm text-muted-foreground [&_svg]:open:rotate-90">
          <summary className="cursor-pointer list-none inline-flex items-center gap-1 text-primary/90 hover:text-primary select-none">
            <ChevronRight size={14} className="transition-transform" aria-hidden />
            details
          </summary>
          <ul className="mt-3 space-y-2">
            {details.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="text-primary" aria-hidden>►</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </details>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs border border-primary/30 text-primary/90">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary text-sm hover:bg-primary hover:text-background"
          >
            <Github size={16} aria-hidden />
            [view source]
          </a>
          {note && <span className="text-xs text-muted-foreground">{note}</span>}
        </div>
      </div>
    </article>
  )
}
