interface SectionHeaderProps {
  command: string
  description?: string
}

export function SectionHeader({ command, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-primary">&gt;</span>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">{command}</h2>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground ml-6 italic">{description}</p>
      )}
    </div>
  )
}
