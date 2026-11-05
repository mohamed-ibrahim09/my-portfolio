import type { Metadata } from 'next'
import Link from 'next/link'
import { PrintButton } from '@/components/PrintButton'
import { certifications, education, experience, languages, profile, projects, skills } from '@/lib/data'

export const metadata: Metadata = {
  title: 'CV — Mohamed Elhadad, DevOps Engineer',
  description: 'CV of Mohamed Elhadad, DevOps Engineer at ALGOcas and AWS Certified Solutions Architect – Associate.',
  alternates: { canonical: '/cv' },
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-widest text-primary border-b border-border pb-1 mb-3 print:text-black print:border-black/30">
      {children}
    </h2>
  )
}

export default function CvPage() {
  const jobs = experience.filter((j) => !j.title.startsWith('GCI'))

  return (
    <div className="py-10 sm:py-14 print:py-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="no-print flex flex-wrap items-center justify-between gap-3 mb-6 text-sm">
          <Link href="/" className="text-primary hover:underline">
            ← cd ~
          </Link>
          <PrintButton />
        </div>

        <article className="terminal-card !p-6 sm:!p-10 bg-background print:border-0 print:p-0 print:bg-white print:text-black text-[#e2e8f0] text-sm leading-relaxed">
          <header className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#e2e8f0] print:text-black">{profile.fullName}</h1>
            <p className="text-primary print:text-black font-semibold">
              {profile.role} · AWS Certified Solutions Architect – Associate
            </p>
            <p className="text-muted-foreground print:text-black/70 mt-1">
              {profile.location} · {profile.email} · linkedin.com/in/mohamed-ibrahim-elhadad · github.com/mohamed-ibrahim09 ·
              mohamedelhadad.vercel.app
            </p>
          </header>

          <section className="mb-6">
            <Heading>Summary</Heading>
            <p>{profile.summary}</p>
          </section>

          <section className="mb-6">
            <Heading>Experience</Heading>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.title + job.period} className="break-inside-avoid">
                  <div className="flex flex-wrap justify-between gap-x-4">
                    <p className="font-bold">
                      {job.title} — <span className="font-normal">{job.organization}</span>
                    </p>
                    <p className="text-muted-foreground print:text-black/70">{job.period}</p>
                  </div>
                  <ul className="list-disc pl-5 mt-1 space-y-0.5">
                    {(job.highlights.length ? job.highlights : [job.summary]).map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <Heading>Projects</Heading>
            <ul className="space-y-2">
              {projects.map((p) => (
                <li key={p.slug} className="break-inside-avoid">
                  <span className="font-bold">{p.name}</span> — {p.summary}{' '}
                  <span className="text-muted-foreground print:text-black/70">{p.github.replace('https://', '')}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-6 break-inside-avoid">
            <Heading>Skills</Heading>
            <ul className="space-y-1">
              {skills.map((s) => (
                <li key={s.category}>
                  <span className="font-bold">{s.category}:</span> {s.items.join(' · ')}
                </li>
              ))}
            </ul>
          </section>

          <div className="grid sm:grid-cols-2 print:grid-cols-2 gap-6">
            <section className="break-inside-avoid">
              <Heading>Certifications</Heading>
              <ul className="space-y-1">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <span className="font-bold">{c.title}</span> — {c.issuer}
                    {c.year && ` (${c.year})`}
                  </li>
                ))}
              </ul>
            </section>
            <section className="break-inside-avoid">
              <Heading>Education</Heading>
              <p className="font-bold">{education.degree}</p>
              <p>
                {education.school} · {education.period}
              </p>
              <p className="mt-3">
                <span className="font-bold">Languages:</span> {languages.map((l) => `${l.name} (${l.level})`).join(' · ')}
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
