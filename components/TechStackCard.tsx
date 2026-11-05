interface TechStackCardProps {
  icon: string
  category: string
  technologies: string[]
}

export function TechStackCard({ icon, category, technologies }: TechStackCardProps) {
  return (
    <div className="border border-border bg-card p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-3 text-primary">`{category}`</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary border border-primary/30 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
