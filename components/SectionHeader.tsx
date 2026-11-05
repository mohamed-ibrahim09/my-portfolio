interface SectionHeaderProps {
  /** The shell command shown as the section title, e.g. "ls projects/" */
  command: string
  /** Plain-language title for screen readers and search engines */
  title?: string
  description?: string
}

export function SectionHeader({ command, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <h2 className="term-heading text-xl sm:text-2xl font-bold flex flex-wrap items-baseline gap-x-2">
        <span className="text-primary" aria-hidden>
          elhadad@portfolio:~$
        </span>
        <span aria-hidden={title ? true : undefined}>{command}</span>
        {title && <span className="sr-only">{title}</span>}
      </h2>
      {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
    </div>
  )
}
