// Single source of truth for portfolio content.
// The home page, the terminal, the command menu and the /cv page all read from here.

export const profile = {
  name: 'Mohamed Elhadad',
  fullName: 'Mohamed Ibrahim Elhadad',
  role: 'DevOps Engineer',
  company: 'ALGOcas',
  location: 'Cairo, Egypt',
  headline: 'DevOps Engineer @ ALGOcas • AWS Certified Solutions Architect – Associate',
  email: 'mohammed.i.elhadad@gmail.com',
  links: {
    github: 'https://github.com/mohamed-ibrahim09',
    linkedin: 'https://www.linkedin.com/in/mohamed-ibrahim-elhadad',
    // Arabic writing lives in LinkedIn posts. Change this one URL if it moves.
    writing: 'https://www.linkedin.com/in/mohamed-ibrahim-elhadad/recent-activity/all/',
  },
  summary:
    "Your deployments shouldn't depend on manual steps or undocumented processes. I build AWS environments, CI/CD pipelines and Kubernetes deployments that behave the same way every time, with IAM, least privilege and monitoring built in from the start instead of bolted on later.",
  summary2:
    "I'm an AWS Certified Solutions Architect – Associate, with networking (CCNA) and Linux administration training from NTI. On the side I explore how AI agents (Amazon Bedrock, AgentCore, MCP) fit into real infrastructure, and I write about it in Egyptian Arabic.",
}

export const proof = [
  { value: 'AWS SAA', label: 'Solutions Architect – Associate' },
  { value: '40%', label: 'cost cut migrating to AWS' },
  { value: '5', label: 'systems integrated on AWS' },
  { value: 'ALGOcas', label: 'DevOps Engineer, since Sep 2026' },
]

export const skills = [
  { category: 'AWS', items: ['EC2', 'VPC', 'IAM', 'S3', 'Lambda', 'SQS', 'SNS', 'DynamoDB', 'Step Functions', 'CloudFormation'] },
  { category: 'Containers & CI/CD', items: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Ansible', 'Nginx'] },
  { category: 'Observability', items: ['CloudWatch', 'X-Ray', 'SNS Alerting', 'Prometheus', 'Grafana'] },
  { category: 'Security', items: ['IAM & Least Privilege', 'KMS', 'Secrets Manager', 'Backup Vault Lock'] },
  { category: 'AI on AWS', items: ['Amazon Bedrock', 'AgentCore', 'Strands Agents', 'MCP', 'RAG', 'PyTorch'] },
  { category: 'Languages & Systems', items: ['Python', 'Bash', 'TypeScript', 'SQL', 'Linux', 'Cisco Networking'] },
]

export type Project = {
  slug: string
  name: string
  summary: string
  details: string[]
  tags: string[]
  category: 'AWS / DevOps' | 'AI/ML'
  github: string
  image?: { src: string; alt: string }
  note?: string
}

export const projects: Project[] = [
  {
    slug: 'aiops',
    name: 'AIOps Incident Copilot',
    summary:
      'Human-approved auto-remediation on AWS. A CloudWatch alarm fires, Bedrock explains it in plain English, I approve on Telegram, and a fixed SSM runbook rolls the release back.',
    details: [
      'EventBridge starts a Step Functions workflow: dedup, enrich and redact, summarize, ask a human, roll back, verify.',
      'The AI advises, the human decides, and the runbook is the only thing allowed to act.',
      'Whole stack is one CloudFormation template, with a CI workflow, cost notes and lessons learned.',
    ],
    tags: ['Step Functions', 'Bedrock', 'Lambda', 'SSM', 'CloudFormation'],
    category: 'AWS / DevOps',
    github: 'https://github.com/mohamed-ibrahim09/AIOps-Incident-Copilot',
    image: { src: '/projects/aiops.webp', alt: 'AIOps Incident Copilot architecture: CloudWatch alarm, EventBridge, Step Functions, Bedrock summary, Telegram approval and SSM rollback' },
  },
  {
    slug: 'travel-agent',
    name: 'AWS Agentic Travel Assistant',
    summary:
      'A serverless AI travel agent on the Strands Agents SDK that searches flights, checks live weather, remembers conversations and books tickets through MCP.',
    details: [
      'REST API behind API Gateway with Cognito (OAuth2/JWT) authentication.',
      'Bedrock Knowledge Base for RAG, S3-backed session memory, AgentCore for MCP tools.',
      'Every request traced through CloudWatch and X-Ray.',
    ],
    tags: ['Strands Agents', 'Bedrock', 'AgentCore', 'Cognito', 'MCP'],
    category: 'AI/ML',
    github: 'https://github.com/mohamed-ibrahim09/AWS-Agentic-Travel-Assistant',
    image: { src: '/projects/travel-agent.webp', alt: 'Travel agent architecture: client, API Gateway, Cognito, Lambda Strands agent, Bedrock AgentCore MCP, knowledge base and S3 sessions' },
  },
  {
    slug: 'backup-dr',
    name: 'AWS Backup & Disaster Recovery',
    summary:
      'Most backup guides stop at "backup completed". This one restores the workload in a second Region and proves it works end to end.',
    details: [
      'AWS Backup with KMS encryption and Backup Vault Lock for immutable backups.',
      'Cross-Region copy into a DR vault, then a full restore of the EC2 workload.',
      'Multi-layer validation with RPO and RTO in mind.',
    ],
    tags: ['AWS Backup', 'KMS', 'Vault Lock', 'EC2', 'Cross-Region'],
    category: 'AWS / DevOps',
    github: 'https://github.com/mohamed-ibrahim09/aws-backup-disaster-recovery',
    image: { src: '/projects/backup-dr.webp', alt: 'Backup and DR architecture: production EC2 backed up to an encrypted vault, copied cross-Region and restored' },
  },
  {
    slug: 'cloud-dashboard',
    name: 'AWS Cloud Infrastructure Dashboard',
    summary:
      'A multi-AZ web app behind an Application Load Balancer and Auto Scaling Group, with TLS, DNS and CloudWatch monitoring.',
    details: [
      'ALB in front of an Auto Scaling Group across Availability Zones.',
      'TLS with ACM, DNS with Route 53, CloudWatch agent for metrics and Nginx logs.',
      'FastAPI backend, React frontend, Nginx reverse proxy.',
    ],
    tags: ['EC2', 'ALB', 'Auto Scaling', 'Route 53', 'CloudWatch'],
    category: 'AWS / DevOps',
    github: 'https://github.com/mohamed-ibrahim09/AWS-Cloud-Infrastructure-Dashboard',
    image: { src: '/projects/cloud-dashboard.webp', alt: 'Screenshot of the AWS Cloud Infrastructure Dashboard web app' },
  },
  {
    slug: 'deepfake',
    name: 'AI DeepFake Face Detection',
    summary:
      'Real vs. AI-generated face classifier with 99.7% test accuracy and ROC-AUC 0.999, trained on 140k images with Swin Transformer v2 and Xception.',
    details: [
      'Built the Flask web app for real-time predictions.',
      'Implemented Swin Transformer v2 with a custom head in PyTorch and TIMM.',
      'Training pipeline with AdamW, differential learning rates and early stopping.',
    ],
    tags: ['PyTorch', 'Swin v2', 'Flask', 'Computer Vision'],
    category: 'AI/ML',
    github: 'https://github.com/ahmed-shamh/AI-Based-Real-vs-Fake-Face-Classification',
    note: '6-member team project · repository hosted by a teammate',
  },
]

export type Job = {
  title: string
  organization: string
  period: string
  location: string
  summary: string
  highlights: string[]
  tags: string[]
  current?: boolean
}

export const experience: Job[] = [
  {
    title: 'DevOps Engineer',
    organization: 'ALGOcas (Algo - Cloud Advanced Solutions)',
    period: 'Sep 2026 – Present',
    location: 'Cairo, Egypt · Hybrid · Full-time',
    summary: 'DevOps on AWS across migration, system integration, CI/CD, Kubernetes and cloud security.',
    highlights: [
      'Migrated workloads from on-prem and other clouds into AWS, consolidating the infrastructure in one place and cutting cost by 40%.',
      'Built an event-driven middleware on AWS that connects 5 systems across on-prem, Azure and SaaS (ITSM, CRM, e-commerce) through one ingest layer, replacing point-to-point integrations.',
      'Made it reliable by design: per-destination SQS queues with dead-letter queues, idempotent processing in DynamoDB and event replay, so failed messages are retried and recoverable instead of lost.',
      'Added end-to-end tracing and alerting (correlation IDs, CloudWatch alarms, SNS, X-Ray), with IAM, KMS and Secrets Manager protecting access and credentials.',
    ],
    tags: ['AWS', 'SQS', 'DynamoDB', 'X-Ray', 'KMS', 'Kubernetes', 'CI/CD'],
    current: true,
  },
  {
    title: 'DevOps Track Trainee',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: 'Dec 2025 – Jun 2026',
    location: 'Hybrid',
    summary: 'Hands-on DevOps training focused on automation, CI/CD and system reliability.',
    highlights: [
      'Built CI/CD pipelines for build, test and deployment, and containerized applications with Docker.',
      'Configuration management with Ansible, Linux administration, monitoring and troubleshooting.',
      'Team leader and CI/CD engineer for a six-person cloud-native telecom platform (Jenkins, Docker, Kubernetes, AWS).',
    ],
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'Ansible'],
  },
  {
    title: 'Linux Administrator Trainee',
    organization: 'National Telecommunication Institute (NTI)',
    period: 'Apr 2026 – Jun 2026',
    location: 'Remote',
    summary: 'Linux system administration on Ubuntu and CentOS.',
    highlights: [
      'Users and permissions, services and processes, monitoring and troubleshooting.',
      'Bash scripting, apt and yum, SSH and access control.',
    ],
    tags: ['Linux', 'Bash', 'SSH'],
  },
  {
    title: 'GCI World 2026 — AI & Data Science Program',
    organization: 'Matsuo-Iwasawa Laboratory, University of Tokyo',
    period: 'Apr 2026 – Jul 2026',
    location: 'Remote',
    summary: '14-week global program in applied machine learning and practical model development.',
    highlights: [],
    tags: ['Machine Learning', 'Python'],
  },
  {
    title: 'CCNA Trainee',
    organization: 'National Telecommunication Institute (NTI)',
    period: 'Nov 2025 – Feb 2026',
    location: 'Remote',
    summary: 'Networking fundamentals and hands-on Cisco configuration.',
    highlights: ['Subnetting, VLANs, static routing, RIP and OSPF basics, ACLs, troubleshooting in Packet Tracer.'],
    tags: ['Routing', 'Switching', 'Cisco'],
  },
]

export const certifications = [
  { title: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '' },
  { title: 'CCNA (CCNAv7)', issuer: 'National Telecommunication Institute (NTI)', year: '2026' },
  { title: 'AI Fluency Framework & Foundations', issuer: 'Anthropic', year: '2026' },
]

export const education = {
  degree: 'Bachelor of Artificial Intelligence, Cybersecurity specialization',
  school: 'Menofia University',
  period: '2023 – 2027 (expected)',
}

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'C1 – Advanced' },
  { name: 'French', level: 'A2 – Elementary' },
]
