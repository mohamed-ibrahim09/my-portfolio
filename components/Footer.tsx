import { profile } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-border mt-8 py-8 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-sm font-mono">
        <p className="text-muted-foreground">
          <span className="text-primary">$</span> exit · © {profile.name} 2026
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="terminal-link">github</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="terminal-link">linkedin</a>
          <a href={profile.links.writing} target="_blank" rel="noopener noreferrer" className="terminal-link">writing · عربي</a>
          <a href="/cv" className="terminal-link">cv</a>
        </nav>
      </div>
    </footer>
  )
}
