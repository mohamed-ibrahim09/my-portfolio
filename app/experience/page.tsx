import type { Metadata } from 'next'
import { SectionHeader } from '@/components/SectionHeader'
import { certifications, education, experience } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Experience — Mohamed Elhadad',
  description: 'DevOps Engineer at ALGOcas. Experience, education and certifications.',
}

export default function Experience() {
  return (
    <div className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-mono">
        <SectionHeader
          command="cat experience.log"
          title="Experience"
          description="From networking and Linux to DevOps on AWS in production."
        />

        <ol className="relative border-l border-primary/30 ml-2 space-y-8">
          {experience.map((job) => (
            <li key={`${job.organization}-${job.period}`} className="pl-6 relative">
              <span
                className={`absolute -left-[7px] top-2 w-3 h-3 border ${job.current ? 'bg-primary border-primary shadow-[0_0_12px_rgba(0,255,65,0.7)]' : 'bg-background border-primary/60'}`}
                aria-hidden
              />
              <div className="terminal-card">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#e2e8f0]">
                    {job.title}{' '}
                    <span className={`term-badge align-middle ${job.current ? 'text-primary' : 'text-muted-foreground'}`}>
                      {job.current ? 'CURRENT' : 'DONE'}
                    </span>
                  </h3>
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-primary text-sm mb-1">{job.organization}</p>
                <p className="text-xs text-muted-foreground mb-4">{job.location}</p>
                <p className="text-foreground text-sm mb-3">{job.summary}</p>
                {job.highlights.length > 0 && (
                  <ul className="space-y-2 text-sm text-[#cbd5e1] mb-4">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-primary" aria-hidden>►</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs border border-primary/30 text-primary/90">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <div>
            <h3 className="term-heading text-lg font-bold mb-4">
              <span className="text-primary">$</span> ls certifications/
            </h3>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.title} className="terminal-card !p-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[#e2e8f0] font-semibold">{c.title}</p>
                    <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                  {c.year && <span className="text-xs text-muted-foreground shrink-0">{c.year}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="term-heading text-lg font-bold mb-4">
              <span className="text-primary">$</span> cat education.txt
            </h3>
            <div className="terminal-card !p-4">
              <p className="text-[#e2e8f0] font-semibold">{education.degree}</p>
              <p className="text-sm text-primary">{education.school}</p>
              <p className="text-sm text-muted-foreground">{education.period}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
