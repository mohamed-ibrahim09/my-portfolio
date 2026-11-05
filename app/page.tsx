import { Hero } from '@/components/Hero'
import { SectionHeader } from '@/components/SectionHeader'
import { CaseStudy } from '@/components/CaseStudy'
import ProjectsPage from './projects/page'
import ExperiencePage from './experience/page'
import ContactPage from './contact/page'
import { profile, skills } from '@/lib/data'

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="py-20 sm:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader command="cat about.txt" title="About" description={`${profile.role} at ${profile.company}, based in ${profile.location}`} />

          <div className="grid lg:grid-cols-5 gap-10 font-mono">
            <div className="lg:col-span-2 space-y-5 text-[#e2e8f0] leading-relaxed">
              <p>{profile.summary}</p>
              <p className="text-foreground">{profile.summary2}</p>
              <p className="text-foreground">
                I started with networking (CCNA) and Linux at NTI, led a six-person DevOps team in the DEPI track, and now
                migrate workloads into AWS at ALGOcas. I&apos;m finishing a Bachelor of AI with a cybersecurity
                specialization, so security and AI stay close to everything I build.
              </p>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 content-start">
              {skills.map((group) => (
                <div key={group.category} className="terminal-card !p-4">
                  <p className="text-primary text-sm font-semibold mb-2">~/{group.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}</p>
                  <p className="text-sm text-[#e2e8f0] leading-relaxed">{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-border">
        <ProjectsPage />
      </section>

      <section id="case-study" className="border-t border-border">
        <CaseStudy />
      </section>

      <section id="experience" className="border-t border-border">
        <ExperiencePage />
      </section>

      <section id="contact" className="border-t border-border">
        <ContactPage />
      </section>
    </>
  )
}
