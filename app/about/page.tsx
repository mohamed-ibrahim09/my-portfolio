import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Mohamed Elhadad',
  description: 'Mohamed Elhadad, DevOps Engineer at ALGOcas and AWS Certified Solutions Architect – Associate, based in Cairo, Egypt.',
}

export default function About() {
  const skills = [
    { category: 'AWS', items: ['EC2', 'VPC', 'IAM', 'S3', 'Lambda', 'SQS', 'SNS', 'DynamoDB', 'Step Functions', 'CloudFormation'] },
    { category: 'Containers & CI/CD', items: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Ansible', 'Nginx'] },
    { category: 'Observability & Security', items: ['CloudWatch', 'X-Ray', 'Prometheus', 'Grafana', 'KMS', 'Secrets Manager', 'Least Privilege'] },
    { category: 'AI on AWS', items: ['Amazon Bedrock', 'AgentCore', 'Strands Agents', 'MCP', 'RAG', 'PyTorch'] },
    { category: 'Languages', items: ['Python', 'Bash', 'TypeScript', 'SQL'] },
    { category: 'Systems & Networking', items: ['Linux (Ubuntu/CentOS)', 'TCP/IP', 'VLANs', 'OSPF', 'ACLs'] },
  ]

  const education = [
    {
      title: 'DevOps Engineer — ALGOcas',
      institution: 'Algo - Cloud Advanced Solutions · Cairo, Egypt',
      period: 'Sep 2026 – Present',
      description: 'DevOps on AWS across migration, system integration, CI/CD, Kubernetes and cloud security. Migrated workloads into AWS and cut cost by 40%.',
      highlight: true,
    },
    {
      title: 'AWS Certified Solutions Architect – Associate',
      institution: 'Amazon Web Services',
      period: 'Certified',
      description: 'Designing secure, resilient, high-performing and cost-optimized architectures on AWS.',
      highlight: true,
    },
    {
      title: 'Bachelor of Artificial Intelligence',
      institution: 'Menofia University',
      period: '2023 – 2027 (Expected)',
      description: 'Specialization in Cybersecurity. Focusing on AI fundamentals, machine learning, and secure system design.',
    },
    {
      title: 'CCNA & Linux Administration',
      institution: 'National Telecommunication Institute (NTI)',
      period: '2025 – 2026',
      description: 'Cisco networking (routing, switching, VLANs, OSPF, ACLs) and Linux administration on Ubuntu and CentOS.',
    },
    {
      title: 'DevOps Track',
      institution: 'Digital Egypt Pioneers Initiative — Ministry of Communications',
      period: 'Dec 2025 – Jun 2026',
      description: 'CI/CD, Docker, Kubernetes and Ansible. Team leader and CI/CD engineer on a six-person telecom platform project.',
    },
  ]

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20 space-y-6 animate-[slideInUp_0.6s_ease-out]">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              I&apos;m a <span className="font-semibold text-primary">DevOps Engineer</span> at ALGOcas in Cairo, Egypt, and an <span className="font-semibold text-primary">AWS Certified Solutions Architect – Associate</span>. I build AWS environments, <span className="font-semibold text-primary">CI/CD</span> pipelines and Kubernetes deployments that behave the same way every time, with IAM, least privilege and monitoring built in from the start. On the side I explore how AI agents (Amazon Bedrock, AgentCore, MCP) fit into real infrastructure.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: 'Current Role', value: 'DevOps @ ALGOcas' },
            { label: 'AWS Certified', value: 'SAA' },
            { label: 'Cost Cut in AWS Migration', value: '40%' },
            { label: 'Systems Integrated', value: '5' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-lg bg-card border border-border">
              <p className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Experience, Education &amp; Certifications</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg border transition-all duration-200 ${
                  edu.highlight
                    ? 'bg-primary/5 border-primary shadow-lg'
                    : 'bg-card border-border hover:border-primary'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{edu.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="text-foreground leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-200">
                <h3 className="text-lg font-bold text-primary mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
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

        {/* About Text */}
        <section className="max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">My Journey</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              My journey in technology began with a curiosity about how systems work. Starting with web development, 
              I discovered my passion for building end-to-end solutions that solve real problems. Every project has taught me 
              something valuable about clean code, system design, and user experience.
            </p>
            <p>
              Currently, I&apos;m deeply interested in artificial intelligence and its applications. The intersection of AI with 
              web development fascinates me—from integrating language models into applications to building intelligent systems 
              that enhance user experiences. I believe AI will shape the future of software development, and I&apos;m committed to 
              staying at the forefront of this evolution.
            </p>
            <p>
              Beyond coding, I believe in continuous learning. Whether it&apos;s through formal education, online courses, or 
              hands-on projects, I&apos;m always exploring new technologies and methodologies. I&apos;m particularly focused on 
              cybersecurity and secure coding practices to build applications that are not just powerful but also safe.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new tech trends,
              or diving into AI research papers. I&apos;m always open to collaborations, mentorship, and opportunities to 
              make a meaningful impact through technology.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
