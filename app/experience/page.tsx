import { Metadata } from 'next'
import { Calendar, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Experience - Mohamed Elhadad',
  description: 'DevOps Engineer at ALGOcas. Experience, internships and certifications.',
}

export default function Experience() {
  const experiences = [
    {
      type: 'job',
      title: 'DevOps Engineer',
      organization: 'ALGOcas (Algo - Cloud Advanced Solutions)',
      period: 'Sep 2026 – Present',
      location: 'Cairo, Egypt · Hybrid · Full-time',
      description:
        'DevOps on AWS across migration, system integration, CI/CD, Kubernetes and cloud security.',
      highlights: [
        'Migrated workloads from on-prem and other clouds into AWS, consolidating the infrastructure in one place and cutting cost by 40%.',
        'Built an event-driven middleware on AWS that connects 5 systems across on-prem, Azure and SaaS (ITSM, CRM, e-commerce) through one ingest layer, replacing point-to-point integrations.',
        'Made it reliable by design: per-destination SQS queues with dead-letter queues, idempotent processing in DynamoDB and event replay, so failed messages are retried and recoverable instead of lost.',
        'Added end-to-end tracing and alerting (correlation IDs, CloudWatch alarms, SNS, X-Ray), with IAM, KMS and Secrets Manager protecting access and credentials.',
      ],
      skills: ['AWS', 'SQS', 'DynamoDB', 'CloudWatch', 'X-Ray', 'KMS', 'Kubernetes', 'CI/CD'],
      status: 'Current',
    },
    {
      type: 'internship',
      title: 'DevOps Track Trainee',
      organization: 'Digital Egypt Pioneers Initiative (DEPI) — Ministry of Communications',
      period: 'Dec 2025 – Jun 2026',
      location: 'Hybrid',
      description:
        'Hands-on DevOps training focused on automation, CI/CD and system reliability.',
      highlights: [
        'Built CI/CD pipelines to automate build, test and deployment, and containerized applications with Docker.',
        'Practiced configuration management with Ansible, plus Linux administration, monitoring and troubleshooting.',
        'Team leader and CI/CD engineer for a six-person cloud-native telecom platform project (Jenkins, Docker, Kubernetes, AWS).',
      ],
      skills: ['Jenkins', 'Docker', 'Kubernetes', 'Ansible', 'Git', 'Linux'],
      status: 'Completed',
    },
    {
      type: 'internship',
      title: 'Linux Administrator Trainee',
      organization: 'National Telecommunication Institute (NTI)',
      period: 'Apr 2026 – Jun 2026',
      location: 'Remote',
      description: 'Linux system administration on Ubuntu and CentOS.',
      highlights: [
        'User and permission management, services and processes, monitoring and troubleshooting.',
        'Bash scripting, package management with apt and yum, SSH and access control.',
      ],
      skills: ['Linux', 'Bash', 'SSH', 'Ubuntu', 'CentOS'],
      status: 'Completed',
    },
    {
      type: 'program',
      title: 'GCI World 2026 — AI & Data Science Program',
      organization: 'Matsuo-Iwasawa Laboratory, University of Tokyo',
      period: 'Apr 2026 – Jul 2026',
      location: 'Tokyo, Japan (Remote)',
      description:
        'A 14-week global AI and Data Science program focused on applied machine learning, research collaboration and practical model development.',
      highlights: [],
      skills: ['Machine Learning', 'Data Science', 'Python'],
      status: 'Completed',
    },
    {
      type: 'internship',
      title: 'CCNA Trainee',
      organization: 'National Telecommunication Institute (NTI)',
      period: 'Nov 2025 – Feb 2026',
      location: 'Remote',
      description: 'Networking fundamentals and hands-on Cisco configuration.',
      highlights: [
        'OSI and TCP/IP, subnetting, VLANs, static routing, RIP and OSPF basics, and ACLs.',
        'Configured and troubleshot routers and switches in Cisco Packet Tracer.',
      ],
      skills: ['Networking', 'Routing', 'Switching', 'Cisco', 'ACLs'],
      status: 'Completed',
    },
  ]

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      period: 'Certified',
      description: 'Designing secure, resilient, high-performing and cost-optimized architectures on AWS.',
      icon: '☁️',
    },
    {
      title: 'CCNA (CCNAv7)',
      issuer: 'National Telecommunication Institute (NTI)',
      period: '2026',
      description: 'Routing, switching, VLANs, OSPF, ACLs and network troubleshooting on Cisco devices.',
      icon: '🌐',
    },
    {
      title: 'AI Fluency Framework & Foundations',
      issuer: 'Anthropic',
      period: '2026',
      description: 'Practical use of AI assistants: capabilities, limitations and responsible use.',
      icon: '🤖',
    },
  ]

  const timeline = [
    { year: '2023', event: 'Started Bachelor of Artificial Intelligence at Menofia University', icon: '🎓' },
    { year: 'Nov 2025', event: 'CCNA training — National Telecommunication Institute', icon: '🌐' },
    { year: 'Dec 2025', event: 'DevOps Track — Digital Egypt Pioneers Initiative', icon: '⚙️' },
    { year: 'Apr 2026', event: 'Linux Administration — NTI · GCI World — University of Tokyo', icon: '🐧' },
    { year: 'Sep 2026', event: 'DevOps Engineer at ALGOcas', icon: '💼' },
    { year: '2027', event: 'Expected graduation, AI with a Cybersecurity specialization', icon: '🚀' },
  ]

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 space-y-6 animate-[slideInUp_0.6s_ease-out]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Experience & Certifications
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            From networking and Linux to DevOps on AWS in production.
          </p>
        </div>

        {/* Current Experiences */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-card border border-border hover:border-primary transition-all duration-200 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        exp.status === 'Current'
                          ? 'bg-primary/15 text-primary border border-primary/40'
                          : 'bg-secondary/10 text-secondary border border-secondary/30'
                      }`}>
                        {exp.status}
                      </span>
                    </div>
                    <p className="text-primary font-semibold mb-2">{exp.organization}</p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>

                {exp.highlights.length > 0 && (
                  <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">►</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Certifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Key Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{cert.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                    <p className="text-xs text-muted-foreground font-mono">{cert.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-12">Career Timeline</h2>
          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="mt-1">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-border pl-6 relative">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2.5"></div>
                  <p className="text-sm font-bold text-primary mb-2">{item.year}</p>
                  <p className="text-lg font-semibold text-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
