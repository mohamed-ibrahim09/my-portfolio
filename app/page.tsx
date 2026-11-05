import { Hero } from '@/components/Hero'
import { SectionHeader } from '@/components/SectionHeader'
import ProjectsPage from './projects/page'
import ExperiencePage from './experience/page'
import BlogPage from './blog/page'
import ContactPage from './contact/page'

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="min-h-screen py-24 sm:py-32 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            command="elhadad@portfolio:~$ cat about.txt"
            description="DevOps Engineer at ALGOcas, based in Cairo, Egypt"
          />

          <div className="space-y-8 font-mono">
            <p className="text-[#e2e8f0] leading-relaxed max-w-4xl">
              Your deployments shouldn&apos;t depend on manual steps or undocumented processes. I&apos;m a DevOps Engineer at ALGOcas. I build AWS environments, CI/CD pipelines and Kubernetes deployments that behave the same way every time, with IAM, least privilege and monitoring built in from the start instead of bolted on later.
            </p>
            <p className="text-[#e2e8f0] leading-relaxed max-w-4xl">
              I&apos;m an AWS Certified Solutions Architect – Associate, with networking (CCNA) and Linux administration training from NTI. On the side I explore how AI agents (Amazon Bedrock, AgentCore, MCP) fit into real infrastructure, and I write about it in Egyptian Arabic.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Current Role', value: 'DevOps @ ALGOcas' },
                { label: 'AWS Certified', value: 'Solutions Architect' },
                { label: 'Cost Cut in AWS Migration', value: '40%' },
                { label: 'Systems Integrated on AWS', value: '5' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-card border border-border">
                  <p className="text-[#00ff41] font-bold text-lg">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-[#00ff41] text-xl font-bold">Education & Certifications</h3>
              <ul className="space-y-2 text-[#e2e8f0]">
                <li>• AWS Certified Solutions Architect – Associate — Amazon Web Services</li>
                <li>• Bachelor of Artificial Intelligence — Menofia University (2023–2027), Cybersecurity specialization</li>
                <li>• CCNA — National Telecommunication Institute (2026)</li>
                <li>• Linux Administration — National Telecommunication Institute (2026)</li>
                <li>• DevOps Track — DEPI / Ministry of Communications (Dec 2025 – Jun 2026)</li>
                <li>• GCI World 2026 — Matsuo-Iwasawa Lab, University of Tokyo (April–July 2026)</li>
                <li>• AI Fluency Framework &amp; Foundations — Anthropic (2026)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#00ff41] text-xl font-bold mb-4">Skills Grid</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { category: 'AWS', items: ['EC2', 'VPC', 'IAM', 'S3', 'Lambda', 'SQS', 'SNS', 'DynamoDB', 'Step Functions', 'CloudFormation'] },
                  { category: 'Containers & CI/CD', items: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Ansible', 'Nginx'] },
                  { category: 'Observability', items: ['CloudWatch', 'X-Ray', 'SNS Alerting', 'Prometheus', 'Grafana'] },
                  { category: 'Security', items: ['IAM & Least Privilege', 'KMS', 'Secrets Manager', 'Backup Vault Lock', 'Cybersecurity Principles'] },
                  { category: 'AI on AWS', items: ['Amazon Bedrock', 'AgentCore', 'Strands Agents', 'MCP', 'RAG', 'PyTorch'] },
                  { category: 'Languages & Systems', items: ['Python', 'Bash', 'TypeScript', 'SQL', 'Linux (Ubuntu/CentOS)', 'Cisco Networking'] },
                ].map((group) => (
                  <div key={group.category} className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-[#00ff41] font-semibold mb-2">{group.category}</p>
                    <p className="text-sm text-[#e2e8f0]">{group.items.join(' • ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#00ff41] text-xl font-bold">My Journey</h3>
              <p className="text-[#e2e8f0] leading-relaxed">
                I started with networking (CCNA) and Linux administration at NTI, then built CI/CD pipelines, containers and Kubernetes deployments in the DEPI DevOps track, where I led a six-person team. Today at ALGOcas I migrate workloads into AWS and build event-driven integrations that are reliable by design, with retries, dead-letter queues, tracing and alerting. I&apos;m studying for a Bachelor of Artificial Intelligence with a cybersecurity specialization at Menofia University, so security and AI stay close to everything I build.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen border-t border-primary/10">
        <ProjectsPage />
      </section>

      <section id="experience" className="min-h-screen border-t border-primary/10">
        <ExperiencePage />
      </section>

      <section id="blog" className="min-h-screen border-t border-primary/10">
        <BlogPage />
      </section>

      <section id="contact" className="min-h-screen border-t border-primary/10">
        <ContactPage />
      </section>
    </>
  )
}
