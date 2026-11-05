import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  name: string
  description: string
  tags: string[]
  stats?: string[]
  role?: string
  achievements?: string[]
  github?: string
  demo?: string
  status?: string
  featured?: boolean
  team?: Array<{ name: string; role: string }>
}

export function ProjectCard({
  name,
  description,
  tags,
  stats,
  role,
  achievements,
  github,
  demo,
  status,
  featured = false,
  team,
}: ProjectCardProps) {
  const containerClasses = featured
    ? 'col-span-1 md:col-span-2'
    : 'col-span-1'

  return (
    <div
      className={`${containerClasses} terminal-card border-l-2 border-l-transparent hover:border-l-primary group`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        {status && (
          <span className={`text-xs font-semibold px-3 py-1 rounded ${
            status === 'In Progress'
              ? 'bg-secondary/10 text-secondary'
              : 'bg-primary/10 text-primary'
          }`}>
            [{status}]
          </span>
        )}
      </div>

      {role && (
        <p className="text-sm text-secondary font-mono mb-3">
          Role: {role}
        </p>
      )}

      <p className="text-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Achievements */}
      {achievements && achievements.length > 0 && (
        <div className="mb-4 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Key Results:</p>
          <ul className="space-y-1">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary mt-1">►</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Team Members */}
      {team && team.length > 0 && (
        <div className="mb-4 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Team:</p>
          <ul className="space-y-1">
            {team.map((member, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span><strong>{member.name}</strong> — {member.role}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-3 py-1 text-xs border border-accent text-accent bg-accent/5 hover:bg-accent/10 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      {stats && (
        <div className="mb-6 text-xs text-muted-foreground font-mono border-t border-border pt-4 mt-4">
          {stats.map((stat, idx) => (
            <span key={idx} className="inline-block mr-4">
              <span className="text-primary">$</span> {stat}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap">
        {github && github !== 'Coming Soon' && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary font-mono text-sm hover:bg-primary hover:text-background transition-all duration-200"
          >
            <Github size={16} />
            [GitHub]
          </a>
        )}
        {github === 'Coming Soon' && (
          <button
            disabled
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-muted text-muted-foreground font-mono text-sm opacity-50 cursor-not-allowed"
          >
            <Github size={16} />
            [GitHub - Coming Soon]
          </button>
        )}
        {demo && demo !== 'Coming Soon' && demo !== '#' && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-secondary text-secondary font-mono text-sm hover:bg-secondary hover:text-background transition-all duration-200"
          >
            <ExternalLink size={16} />
            [Live Demo]
          </a>
        )}
      </div>
    </div>
  )
}
