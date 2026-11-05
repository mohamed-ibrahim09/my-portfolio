'use client'

import { useState } from 'react'
import { SectionHeader } from '@/components/SectionHeader'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/lib/data'

const categories = ['all', 'AWS / DevOps', 'AI/ML'] as const

export default function Projects() {
  const [selected, setSelected] = useState<(typeof categories)[number]>('all')
  const shown = selected === 'all' ? projects : projects.filter((p) => p.category === selected)

  return (
    <div className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          command="ls projects/"
          title="Projects"
          description="AWS, DevOps and AI work. Every project links to its source on GitHub."
        />

        <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelected(c)}
              aria-pressed={selected === c}
              className={`px-3 py-1.5 text-sm border ${
                selected === c ? 'border-primary bg-primary/10 text-primary' : 'border-border text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              --{c === 'all' ? 'all' : c.toLowerCase().replace(/[^a-z]+/g, '-')}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shown.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
