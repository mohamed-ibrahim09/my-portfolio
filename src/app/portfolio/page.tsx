'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDownTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import AppLogo from '@/components/ui/AppLogo';
import { GitHubCtaButton } from '@/components/ui/GitHubCtaButton';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

/** Formspree form URL — override on Vercel: Project → Settings → Environment Variables → NEXT_PUBLIC_FORMSPREE_URL */
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_URL ?? 'https://formspree.io/f/mdawvbrw';

function LinkedInBrandIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubBrandIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// ── Types & data ─────────────────────────────────────────────────────────────

type ProjectStatus = 'completed' | 'in_progress';

interface ModalContribution {
  title: string;
  body: string;
}

interface Project {
  id: string;
  cardTitle: string;
  modalTitle: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  roleBadge: string;
  github: string;
  modalIntro: string;
  contributions?: ModalContribution[];
  myRole?: string;
  learning?: string;
  keyResults?: { label: string; value: string }[];
  team?: string[];
  pipeline?: string;
  deadline?: string;
}

/** Tailwind must see full class names at build time — dynamic `delay-${n}` is purged. */
const STAGGER_DELAY_500 = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500'] as const;
const STAGGER_DELAY_300 = ['delay-100', 'delay-200', 'delay-300'] as const;

const PROJECTS: Project[] = [
  {
    id: 'deepfake',
    cardTitle: 'Deepfake Detection System',
    modalTitle: 'AI-Based DeepFake Face Detection',
    status: 'completed',
    description:
      'AI-powered web app that detects real vs. AI-generated human faces. Achieved 99.7% test accuracy and ROC-AUC of 0.999 using Swin Transformer v2 and Xception architectures, trained on 140,000 images.',
    tech: [
      'Python',
      'PyTorch',
      'TIMM',
      'Swin Transformer v2',
      'Flask',
      'HTML/CSS/JS',
      'scikit-learn',
      'Jupyter Notebook',
    ],
    roleBadge: 'Flask Web App + Model Engineering',
    github: 'https://github.com/ahmed-shamh/AI-Based-Real-vs-Fake-Face-Classification',
    modalIntro:
      'As part of a 6-member team, I contributed to building a deepfake detection system that classifies real vs. AI-generated human faces, achieving 99.7% test accuracy and a ROC-AUC of 0.999. The system was trained on the Kaggle 140k Real and Fake Faces dataset using two architectures: Xception and Swin Transformer v2.',
    contributions: [
      {
        title: 'GUI / Web Application:',
        body: 'Built the full Flask web app (HTML/CSS/JS) that allows users to upload a face image and receive real-time Real/Fake probability predictions — making the model production-accessible beyond a Jupyter notebook.',
      },
      {
        title: 'Swin Transformer v2 Engineering:',
        body: 'Implemented the Swin Transformer v2 model architecture with a custom classification head (Dropout + Linear layer) using PyTorch and the TIMM library.',
      },
      {
        title: 'Training Pipeline & Checkpoints:',
        body: 'Designed a robust training pipeline with AdamW optimizer (differential LRs: backbone 1e-5, head 1e-4), ReduceLROnPlateau scheduling, early stopping, and a full checkpoint/resume system storing epoch, model state, optimizer state, scheduler state, and AMP scaler state.',
      },
    ],
    keyResults: [
      { label: 'Test Accuracy', value: '99.7%' },
      { label: 'Validation Accuracy', value: '99.81%' },
      { label: 'ROC-AUC', value: '0.999' },
      { label: 'Dataset', value: '140,000 images (70k real + 70k fake)' },
    ],
  },
  {
    id: 'aiops',
    cardTitle: 'AIOps Incident Copilot',
    modalTitle: 'AIOps Incident Copilot: Human-Approved Auto-Remediation on AWS',
    status: 'completed',
    description:
      'A CloudWatch alarm fires, Amazon Bedrock explains it in plain English, I approve on Telegram, and a fixed Systems Manager runbook rolls the release back. Deployed as one CloudFormation stack.',
    tech: ['AWS CloudFormation', 'CloudWatch', 'Amazon Bedrock', 'Step Functions', 'Lambda', 'Systems Manager', 'Python'],
    roleBadge: 'Personal project',
    github: 'https://github.com/mohamed-ibrahim09/AIOps-Incident-Copilot',
    modalIntro:
      'The AI advises, the human decides, and the runbook is the only thing allowed to act. An alarm triggers a Step Functions workflow, Bedrock writes a plain-English summary, an approval request goes to Telegram, and an approved decision runs a fixed SSM runbook that rolls the release back. The repository includes a CI workflow, deployment steps, cost notes and lessons learned.',
    learning:
      'Keeping an AI model in an advisory role, human-in-the-loop approval flows, and writing the whole stack as infrastructure as code.',
  },
  {
    id: 'travel-agent',
    cardTitle: 'AWS Agentic Travel Assistant',
    modalTitle: 'Production-Ready AI Travel Agent with Strands on AWS',
    status: 'completed',
    description:
      'A serverless AI travel agent built with the Strands Agents SDK. It reasons over flight and weather data, remembers context, retrieves private knowledge with RAG, and acts through MCP servers behind a secure REST API.',
    tech: ['Strands Agents SDK', 'Amazon Bedrock', 'API Gateway', 'Cognito', 'Lambda', 'S3', 'X-Ray', 'MCP', 'Python'],
    roleBadge: 'Personal project',
    github: 'https://github.com/mohamed-ibrahim09/AWS-Agentic-Travel-Assistant',
    modalIntro:
      'A code-first guide and implementation of an agentic system on AWS. The agent searches flights, fetches live weather from the National Weather Service, keeps conversation memory in S3, answers from a private knowledge base, and reserves or cancels attraction tickets through MCP servers. The REST API is protected with Cognito and every request is traced with CloudWatch and X-Ray.',
    learning:
      'Agent tool use, memory and RAG patterns, MCP, and securing and observing serverless AI workloads.',
  },
  {
    id: 'backup-dr',
    cardTitle: 'AWS Backup & Disaster Recovery',
    modalTitle: 'Enterprise Backup & Disaster Recovery Solution on AWS',
    status: 'completed',
    description:
      'A backup and disaster recovery pipeline using AWS Backup, KMS encryption, Backup Vault Lock and cross-Region replication, with a real restore of the workload into a second Region and validation of the result.',
    tech: ['AWS Backup', 'KMS', 'Backup Vault Lock', 'EC2', 'Nginx', 'Linux'],
    roleBadge: 'Personal project',
    github: 'https://github.com/mohamed-ibrahim09/aws-backup-disaster-recovery',
    modalIntro:
      'Most backup documentation stops at "backup completed successfully". This project goes further: it backs up an Nginx workload on EC2 in us-east-1, replicates the backups to another Region, restores the workload there, and validates it end to end, with RPO and RTO considerations.',
    learning:
      'Recovery validation, immutable backups with Vault Lock, KMS key handling across Regions, and RPO/RTO thinking.',
  },
  {
    id: 'cloud-dashboard',
    cardTitle: 'AWS Cloud Infrastructure Dashboard',
    modalTitle: 'AWS Cloud Infrastructure Dashboard',
    status: 'completed',
    description:
      'A scalable web application on AWS using EC2, an Application Load Balancer and an Auto Scaling Group, with ACM, Route 53 and CloudWatch monitoring. Built with FastAPI, React and Nginx.',
    tech: ['EC2', 'Application Load Balancer', 'Auto Scaling', 'CloudWatch', 'ACM', 'Route 53', 'FastAPI', 'React', 'Nginx'],
    roleBadge: 'Personal project',
    github: 'https://github.com/mohamed-ibrahim09/AWS-Cloud-Infrastructure-Dashboard',
    modalIntro:
      'A multi-AZ web application that demonstrates load balancing, EC2 Auto Scaling, CloudWatch monitoring and cloud-native deployment patterns, with a FastAPI backend, a React frontend and Nginx as reverse proxy.',
    learning:
      'Designing for availability across zones, scaling policies, TLS with ACM, and monitoring a live service.',
  },
];

const EXPERIENCE = [
  {
    role: 'DevOps Engineer',
    org: 'ALGOcas (Algo - Cloud Advanced Solutions)',
    period: 'Sep 2026 – Present',
    place: 'Cairo, Egypt · Hybrid · Full-time',
    summary: 'DevOps on AWS across migration, system integration, CI/CD, Kubernetes and cloud security.',
    points: [
      'Migrated workloads from on-prem and other clouds into AWS, consolidating the infrastructure in one place and cutting cost by 40%.',
      'Built an event-driven middleware on AWS that connects 5 systems across on-prem, Azure and SaaS (ITSM, CRM, e-commerce) through one ingest layer, replacing point-to-point integrations.',
      'Made it reliable by design: per-destination SQS queues with dead-letter queues, idempotent processing in DynamoDB and event replay, so failed messages are retried and recoverable instead of lost.',
      'Added end-to-end tracing and alerting (correlation IDs, CloudWatch alarms, SNS, X-Ray), with IAM, KMS and Secrets Manager protecting access and credentials.',
    ],
  },
  {
    role: 'DevOps Track Trainee',
    org: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: 'Dec 2025 – Jun 2026',
    place: 'Hybrid · Internship',
    summary: 'Hands-on DevOps training in automation, CI/CD and system reliability.',
    points: [
      'Built CI/CD pipelines for build, test and deployment, and containerized applications with Docker.',
      'Practiced configuration management with Ansible, Linux administration, monitoring and troubleshooting.',
      'Team leader and CI/CD engineer on a six-person cloud-native telecom platform project (Jenkins, Docker, Kubernetes, AWS).',
    ],
  },
  {
    role: 'Linux Administrator Trainee',
    org: 'National Telecommunication Institute (NTI)',
    period: 'Apr 2026 – Jun 2026',
    place: 'Remote · Internship',
    summary: 'Linux administration on Ubuntu and CentOS.',
    points: [
      'User and permission management, services and processes, monitoring, SSH and access control.',
      'Bash scripting and package management with apt and yum.',
    ],
  },
  {
    role: 'CCNA Trainee',
    org: 'National Telecommunication Institute (NTI)',
    period: 'Nov 2025 – Feb 2026',
    place: 'Remote · Internship',
    summary: 'Cisco networking fundamentals and configuration.',
    points: [
      'Subnetting, VLANs, static routing, RIP and OSPF basics, ACLs, and troubleshooting in Cisco Packet Tracer.',
    ],
  },
];

const SKILLS = [
  {
    category: 'Cloud',
    icon: '☁',
    proficient: ['AWS EC2', 'S3', 'IAM', 'VPC', 'SQS', 'SNS', 'DynamoDB', 'KMS', 'Secrets Manager'],
    familiar: ['Load Balancing', 'Auto Scaling', 'Amazon Bedrock', 'AgentCore', 'MCP'],
  },
  {
    category: 'Containers & Orchestration',
    icon: '⬡',
    proficient: ['Docker', 'Docker Compose', 'Kubernetes'],
    familiar: ['Pods', 'Deployments', 'Services'],
  },
  {
    category: 'CI/CD',
    icon: '⟳',
    proficient: ['GitHub Actions', 'Git', 'Git Workflows'],
    familiar: ['Jenkins', 'Webhook Automation'],
  },
  {
    category: 'Infrastructure & Automation',
    icon: '⚙',
    proficient: ['Ansible', 'Bash Scripting'],
    familiar: ['Terraform'],
  },
  {
    category: 'Monitoring & Logging',
    icon: '◈',
    proficient: ['Prometheus', 'Grafana', 'CloudWatch', 'X-Ray'],
    familiar: ['Log Analysis'],
  },
  {
    category: 'Networking & Systems',
    icon: '⬡',
    proficient: ['Linux (Ubuntu Server)', 'Nginx', 'TCP/IP'],
    familiar: ['Firewall', 'Security Groups'],
  },
];

const SERVICES = [
  {
    title: 'CI/CD Pipeline Setup',
    description:
      'Automating software delivery through robust CI/CD pipelines using GitHub Actions and Jenkins for efficient and reliable deployments.',
    icon: '⟳',
  },
  {
    title: 'Dockerizing Applications',
    description:
      'Packaging applications and their dependencies into portable Docker containers, ensuring consistent environments across development and production.',
    icon: '⬡',
  },
  {
    title: 'AWS EC2 Deployment',
    description:
      'Deploying and configuring applications on Amazon EC2 instances, including security group setup, instance type selection, and basic scaling strategies.',
    icon: '☁',
  },
  {
    title: 'Linux Server Management',
    description:
      'Setting up, securing, and optimizing Linux servers for performance and reliability, covering user management, system updates, and troubleshooting.',
    icon: '⬛',
  },
  {
    title: 'Infrastructure Automation',
    description:
      'Automating infrastructure provisioning, configuration management, and application deployment using Ansible for increased efficiency.',
    icon: '⚙',
  },
  {
    title: 'Nginx Proxy & Configuration',
    description:
      'Configuring Nginx as a reverse proxy, load balancer, and web server, enhancing application security, performance, and traffic distribution.',
    icon: '◈',
  },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Artificial Intelligence',
    field: 'Cybersecurity Specialization',
    institution: 'Menofia University',
    period: '2023 – 2027 (Expected)',
    areas: ['Cloud Computing', 'Cybersecurity Fundamentals', 'Networking & System Security', 'Machine Learning & AI'],
  },
];

const CERTIFICATIONS: { title: string; issuer: string; year?: string; featured: boolean; note?: string }[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    featured: true,
  },
  {
    title: 'AI Fluency Framework & Foundations',
    issuer: 'Anthropic',
    year: '2026',
    featured: false,
    note: 'Issued by the creators of Claude AI',
  },
  {
    title: 'CCNA Certification',
    issuer: 'National Telecommunication Institute (NTI)',
    year: '2026',
    featured: false,
  },
  {
    title: 'DevOps Internship',
    issuer: 'Digital Egypt Pioneers Initiative — Ministry of Communications',
    year: '2026',
    featured: false,
  },
];

const QUOTES = [
  {
    text: "Infrastructure as code isn't just a practice — it's a mindset shift. When you can version-control your entire environment, you stop fearing change and start managing it.",
  },
  {
    text: "The best deployment is the one nobody notices. Automation isn't about removing humans — it's about letting humans focus on what matters.",
  },
];

// ── Section chrome ────────────────────────────────────────────────────────────

function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-24 px-6 ${className}`}>
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-2 h-2 rounded-full bg-[#7C3AED] pulse-dot" />
      <span className="font-mono text-xs tracking-widest uppercase text-[color:var(--label)]">{children}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-3xl md:text-4xl font-bold text-[color:var(--body)] mb-12 leading-tight">{children}</h2>
  );
}

// ── Terminal block ────────────────────────────────────────────────────────────

const TERMINAL_LINES = [
  { text: '$ whoami', delay: 0, color: 'text-[#C4B5FD]' },
  { text: 'Mohamed Elhadad', delay: 400, color: 'text-white' },
  { text: '$ cat role.txt', delay: 900, color: 'text-[#C4B5FD]' },
  { text: 'DevOps Engineer @ ALGOcas', delay: 1300, color: 'text-[#86EFAC]' },
  { text: '$ cat focus.txt', delay: 1800, color: 'text-[#C4B5FD]' },
  { text: 'AWS · CI/CD · Kubernetes · Cloud Security', delay: 2200, color: 'text-[rgba(226,232,240,0.7)]' },
  { text: '$ status', delay: 2700, color: 'text-[#C4B5FD]' },
  { text: '✓ Open to DevOps roles & AWS freelance projects', delay: 3100, color: 'text-[#86EFAC]' },
];

function TerminalBlock() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    TERMINAL_LINES.forEach((line, i) => {
      setTimeout(() => setVisibleCount(i + 1), line.delay);
    });
  }, []);

  return (
    <div className="glass-panel terminal-window rounded-lg overflow-hidden w-full max-w-xl border border-[rgba(124,58,237,0.2)]">
      <div className="terminal-chrome flex items-center gap-2 px-4 py-3">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
        <span className="ml-3 font-mono text-xs text-[rgba(226,232,240,0.35)]">portfolio.sh</span>
      </div>
      <div className="terminal-body p-5 font-mono text-sm space-y-1.5 min-h-[220px]">
        {TERMINAL_LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className={`${line.color} transition-all duration-300`}>
            {line.text}
          </div>
        ))}
        {visibleCount < TERMINAL_LINES.length && (
          <span className="text-[#7C3AED] animate-[blink_1s_step-end_infinite]">▋</span>
        )}
      </div>
    </div>
  );
}

// ── Project modal ─────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      window.clearTimeout(t);
    };
  }, [project, onClose]);

  if (!project) return null;

  const githubIsPlaceholder = project.github === '#';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        role="presentation"
        className="absolute inset-0 cursor-pointer bg-black/50 backdrop-blur-sm modal-backdrop-enter dark:bg-black/75"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative z-10 max-h-[min(90vh,720px)] w-full max-w-[620px] overflow-y-auto rounded-lg border border-[#e2e8f0] bg-white text-[#1a1d27] shadow-2xl modal-panel-enter transition-colors duration-300 dark:border-[#27272a] dark:bg-[#111113] dark:text-[#e2e8f0]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex justify-end rounded-t-lg border-b border-[#e2e8f0] bg-white/95 px-4 py-3 backdrop-blur-sm dark:border-[#27272a] dark:bg-[#111113]/95">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] dark:text-[#e2e8f0] dark:hover:bg-[#252837] dark:hover:text-white"
            aria-label="Close"
          >
            <XMarkIcon className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="space-y-5 px-6 pb-8 pt-2">
          <h2 id="project-modal-title" className="pr-8 font-mono text-xl font-bold text-[#1a1d27] dark:text-[#e2e8f0]">
            {project.modalTitle}
          </h2>
          <p className="font-sans text-sm leading-relaxed text-zinc-700 dark:text-[#cbd5e1]">{project.modalIntro}</p>

          {project.contributions && project.contributions.length > 0 && (
            <div>
              <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-[#94a3b8]">
                My Contributions
              </h3>
              <ul className="list-none space-y-3">
                {project.contributions.map((c) => (
                  <li key={c.title} className="font-sans text-sm leading-relaxed text-zinc-700 dark:text-[#cbd5e1]">
                    <span className="font-semibold text-[#1a1d27] dark:text-[#e2e8f0]">{c.title}</span> {c.body}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.keyResults && project.keyResults.length > 0 && (
            <div>
              <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-[#94a3b8]">
                Key Results
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.keyResults.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 font-mono text-xs dark:border-[#27272a] dark:bg-[#18181b]"
                  >
                    <p className="mb-1 text-zinc-500 dark:text-[#94a3b8]">{r.label}</p>
                    <p className="text-sm font-semibold text-[#1a1d27] dark:text-[#e2e8f0]">{r.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.myRole && (
            <div>
              <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-[#94a3b8]">
                My Role
              </h3>
              <p className="font-sans text-sm leading-relaxed text-zinc-700 dark:text-[#cbd5e1]">{project.myRole}</p>
            </div>
          )}

          {project.learning && (
            <div>
              <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-[#94a3b8]">
                What I&apos;m learning through this project
              </h3>
              <p className="font-sans text-sm leading-relaxed text-zinc-700 dark:text-[#cbd5e1]">{project.learning}</p>
            </div>
          )}

          {project.team && project.team.length > 0 && (
            <div>
              <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-[#94a3b8]">
                Team: 6 members
              </h3>
              <ul className="list-inside list-disc space-y-1 font-sans text-sm text-zinc-700 dark:text-[#cbd5e1]">
                {project.team.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          )}

          {project.pipeline && (
            <div>
              <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-[#94a3b8]">
                CI/CD Pipeline
              </h3>
              <p className="break-words rounded-md border border-[#e2e8f0] bg-[#f8fafc] p-3 font-mono text-xs leading-relaxed text-zinc-800 dark:border-[#27272a] dark:bg-[#18181b] dark:text-[#e2e8f0]">
                {project.pipeline}
              </p>
            </div>
          )}

          {project.deadline && (
            <p className="font-mono text-sm text-zinc-600 dark:text-[#94a3b8]">{project.deadline}</p>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            {githubIsPlaceholder ? (
              <span className="inline-flex items-center rounded-lg border border-zinc-300 px-4 py-2 font-mono text-xs text-zinc-500 dark:border-[#27272a] dark:text-[#8892a4]">
                GitHub (link coming soon)
              </span>
            ) : (
              <GitHubCtaButton href={project.github} size="lg" className="ring-offset-white dark:ring-offset-[#1a1d27]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Contact form ────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hp, setHp] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (hp.trim().length > 0) {
        setSent(true);
        return;
      }
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio contact from ${form.name}`,
          _gotcha: hp,
        }),
      });

      const data = (await res.json().catch(() => null)) as { error?: string; errors?: unknown } | null;
      if (!res.ok) {
        const msg =
          typeof data?.error === 'string'
            ? data.error
            : 'Could not send your message. Please try again.';
        throw new Error(msg);
      }

      setSent(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to send. Please try again in a moment.';
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return sent ? (
    <div className="glass-panel rounded-lg p-8 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(124,58,237,0.2)]">
        <span className="text-xl text-[#86EFAC]">✓</span>
      </div>
      <p className="font-mono text-sm text-[#86EFAC]">Message transmitted successfully.</p>
      <p className="mt-2 font-mono text-xs text-[color:var(--label)]">I&apos;ll get back to you soon.</p>
      <button
        type="button"
        className="btn-ghost mt-6 px-5 py-2.5 rounded-sm font-mono text-xs tracking-widest uppercase inline-flex items-center gap-2"
        onClick={() => {
          setSent(false);
          setError(null);
          setHp('');
          setForm({ name: '', email: '', message: '' });
        }}
      >
        Send another
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-[color:var(--label)]">
          Website
        </label>
        <input tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} className="w-full" />
      </div>
      {[
        { id: 'name', label: 'name', type: 'text', placeholder: 'Your name' },
        { id: 'email', label: 'email', type: 'email', placeholder: 'your@email.com' },
      ].map((field) => (
        <div key={field.id}>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-[color:var(--label)]">
            {field.label}
          </label>
          <input
            type={field.type}
            required
            placeholder={field.placeholder}
            value={form[field.id as 'name' | 'email']}
            onChange={(e) => setForm((p) => ({ ...p, [field.id]: e.target.value }))}
            className="glass-panel w-full rounded-sm px-4 py-3 font-mono text-sm text-[color:var(--body)] placeholder:text-slate-400/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(124,58,237,0.35)] dark:placeholder:text-slate-500"
          />
        </div>
      ))}
      <div>
        <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-[color:var(--label)]">
          message
        </label>
        <textarea
          required
          rows={4}
          placeholder="What would you like to discuss?"
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="glass-panel w-full resize-none rounded-sm px-4 py-3 font-mono text-sm text-[color:var(--body)] placeholder:text-slate-400/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(124,58,237,0.35)] dark:placeholder:text-slate-500"
        />
      </div>
      {error && <p className="font-mono text-xs text-[#FCA5A5]">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="btn-solid w-full py-3 rounded-sm font-mono text-sm tracking-widest uppercase disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setOpenProject(null), []);

  return (
    <div id="top" className="min-h-screen bg-void noise-overlay">
      <ProjectModal project={openProject} onClose={closeModal} />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[color:var(--glass-border)] glass-panel">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <AppLogo size={24} iconName="CommandLineIcon" text="Mohamed Elhadad" className="text-[color:var(--body)]" />
          </a>
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest md:flex" aria-label="Primary">
            {[
              { label: 'Home', href: '#top' },
              { label: 'Skills', href: '#skills' },
              { label: 'Experience', href: '#experience' },
              { label: 'Projects', href: '#projects' },
              { label: 'Services', href: '#services' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[color:var(--body-faint)] transition-colors duration-300 hover:text-[#7C3AED] dark:hover:text-[#C4B5FD]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-0.5 md:gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn-ghost hidden items-center gap-2 rounded-sm px-5 py-2.5 font-mono text-xs uppercase tracking-widest md:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED] pulse-dot" />
              Hire Me
            </a>
          </div>
        </div>
      </header>

      <main>
        <Section className="min-h-screen flex flex-col items-center justify-center pt-24">
          <div className="absolute inset-0 bg-radial-violet pointer-events-none" />
          <div className="absolute inset-0 grid-lines pointer-events-none opacity-40" />

          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <div className="flex justify-center mb-10">
              <div className="glass-panel flex items-center gap-3 rounded-sm px-4 py-2 font-mono text-xs text-[color:var(--body-faint)]">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] pulse-dot" />
                <span>portfolio ~ </span>
                <span className="text-[#7C3AED] dark:text-[#C4B5FD]">./init_profile.sh</span>
                <span className="text-[#7C3AED] animate-[blink_1s_step-end_infinite]">▋</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 flex flex-col items-center lg:items-start w-full">
                <div className="mb-6">
                  <Image
                    src="/profile.png"
                    alt="Mohamed Elhadad"
                    width={132}
                    height={132}
                    className="rounded-full object-cover border-2 border-[rgba(124,58,237,0.45)] shadow-[0_0_28px_rgba(124,58,237,0.22)]"
                    priority
                  />
                </div>
                <div className="text-center lg:text-left w-full">
                  <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[color:var(--label)]">
                    DevOps Engineer @ ALGOcas
                  </p>
                  <h1 className="mb-6 font-mono text-4xl font-bold leading-tight tracking-tight text-[color:var(--body)] md:text-6xl">
                    Mohamed <span className="text-[#7C3AED] text-glow dark:text-[#C4B5FD]">Elhadad</span>
                  </h1>
                  <p className="mb-8 max-w-lg font-sans text-lg leading-relaxed text-[color:var(--body-muted)]">
                    I build AWS environments, CI/CD pipelines and Kubernetes deployments that behave the same way every time,
                    with IAM, least privilege and monitoring built in from the start. AWS Certified Solutions Architect – Associate.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a
                      href="#contact"
                      className="btn-solid px-6 py-3 rounded-sm font-mono text-sm tracking-widest uppercase inline-flex items-center justify-center"
                    >
                      Get in Touch
                    </a>
                    <a
                      href="#projects"
                      className="btn-ghost px-6 py-3 rounded-sm font-mono text-sm tracking-widest uppercase inline-flex items-center justify-center"
                    >
                      View Projects
                    </a>
                    <a
                      href="/cv.pdf"
                      download
                      className="btn-ghost px-6 py-3 rounded-sm font-mono text-sm tracking-widest uppercase inline-flex items-center justify-center gap-2 border-dashed"
                    >
                      <ArrowDownTrayIcon className="h-4 w-4 shrink-0" aria-hidden />
                      Download CV
                    </a>
                  </div>
                  <div className="mt-8 flex flex-wrap justify-center gap-6 font-mono text-xs text-[color:var(--label)] lg:justify-start">
                    <span className="flex items-center gap-2">
                      <span className="text-[#7C3AED]">◈</span> Cairo, Egypt
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-[#7C3AED]">◈</span> AI Student @ Menofia University
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-[#86EFAC]">●</span> Open to DevOps roles &amp; AWS freelance projects
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                <TerminalBlock />
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills">
          <div className="max-w-6xl mx-auto">
            <div className="reveal">
              <SectionLabel>Technical Skills</SectionLabel>
              <SectionTitle>
                Tools &amp; <span className="text-[#7C3AED] dark:text-[#C4B5FD]">Technologies</span>
              </SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SKILLS.map((skill, i) => (
                <div
                  key={skill.category}
                  className={`reveal glass-panel glass-panel-hover rounded-lg p-6 ${STAGGER_DELAY_500[Math.min(i, 4)]}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[var(--tag-purple-bg)] text-base text-[#7C3AED] dark:text-[#C4B5FD]">
                      {skill.icon}
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-[color:var(--body)]">{skill.category}</h3>
                  </div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[color:var(--label)]">Proficient</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {skill.proficient.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm border border-[rgba(124,58,237,0.2)] bg-[var(--tag-purple-bg)] px-2.5 py-1 font-mono text-xs text-[var(--tag-purple-text)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 border-t border-[rgba(124,58,237,0.12)] pt-3">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[color:var(--label)]">Familiar</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.familiar.map((item) => (
                        <span
                          key={item}
                          className="rounded-sm border border-[rgba(124,58,237,0.12)] bg-[var(--tag-muted-bg)] px-2.5 py-1 font-mono text-xs text-[var(--tag-muted-text)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience">
          <div className="max-w-4xl mx-auto">
            <div className="reveal">
              <SectionLabel>Experience</SectionLabel>
              <SectionTitle>
                Where I&apos;ve <span className="text-[#7C3AED] dark:text-[#C4B5FD]">Worked</span>
              </SectionTitle>
            </div>
            <div className="space-y-6">
              {EXPERIENCE.map((job) => (
                <div key={`${job.org}-${job.period}`} className="reveal glass-panel rounded-lg p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-mono text-lg font-bold text-[color:var(--body)]">{job.role}</h3>
                    <span className="font-mono text-xs text-[color:var(--label)]">{job.period}</span>
                  </div>
                  <p className="mt-1 font-mono text-sm text-[#7C3AED] dark:text-[#C4B5FD]">{job.org}</p>
                  <p className="mt-1 font-mono text-xs text-[color:var(--label)]">{job.place}</p>
                  <p className="mt-3 font-sans text-sm text-[color:var(--body-muted)]">{job.summary}</p>
                  <ul className="mt-3 list-inside list-disc space-y-1.5 font-sans text-sm leading-relaxed text-[color:var(--body-muted)]">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projects" className="section-band">
          <div className="absolute inset-0 bg-radial-violet-bottom pointer-events-none opacity-50" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="reveal">
              <SectionLabel>Projects</SectionLabel>
              <SectionTitle>
                What I&apos;ve <span className="text-[#7C3AED] dark:text-[#C4B5FD]">Built</span>
              </SectionTitle>
            </div>
            <div className="space-y-6">
              {PROJECTS.map((project, i) => (
                <article
                  key={project.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpenProject(project);
                    }
                  }}
                  className={`reveal glass-panel glass-panel-hover w-full cursor-pointer rounded-lg p-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--void)] ${STAGGER_DELAY_300[Math.min(i, 2)]}`}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="w-full flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span
                          className="rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide"
                          style={
                            project.status === 'completed'
                              ? { background: '#eaf3de', color: '#27500a', borderColor: 'rgba(39,80,10,0.2)' }
                              : { background: '#faeeda', color: '#633806', borderColor: 'rgba(99,56,6,0.2)' }
                          }
                        >
                          {project.status === 'completed' ? 'Completed' : 'In Progress'}
                        </span>
                        <span className="rounded-sm border border-[rgba(124,58,237,0.2)] bg-[var(--tag-purple-bg)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B5FD]">
                          {project.roleBadge}
                        </span>
                      </div>
                      <h3 className="mb-3 font-mono text-xl font-bold text-[color:var(--body)]">{project.cardTitle}</h3>
                      <p className="mb-4 font-sans text-sm leading-relaxed text-[color:var(--body-muted)]">{project.description}</p>
                      <p className="mb-2 font-mono text-[10px] text-[color:var(--label)]">Click for full details</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-sm border border-[rgba(124,58,237,0.12)] bg-[var(--tag-muted-bg)] px-2.5 py-1 font-mono text-xs text-[var(--tag-muted-text)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div
                        className="mt-5 flex flex-wrap items-center gap-3"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                        role="presentation"
                      >
                        {project.github !== '#' ? (
                          <GitHubCtaButton href={project.github} size="sm" onClick={(e) => e.stopPropagation()} />
                        ) : (
                          <span className="rounded-lg border border-[color:var(--glass-border)] px-3 py-1.5 font-mono text-xs text-[color:var(--label)]">
                            GitHub (link coming soon)
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="pointer-events-none flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[rgba(124,58,237,0.2)] bg-[var(--tag-purple-bg)]">
                      <span className="font-mono text-lg font-bold text-[#7C3AED] dark:text-[#C4B5FD]">{i + 1}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="education">
          <div className="max-w-6xl mx-auto">
            <div className="reveal">
              <SectionLabel>Education &amp; Certifications</SectionLabel>
              <SectionTitle>
                Academic <span className="text-[#7C3AED] dark:text-[#C4B5FD]">Background</span>
              </SectionTitle>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {EDUCATION.map((edu) => (
                <div key={edu.institution} className="reveal glass-panel rounded-lg p-7">
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[var(--tag-purple-bg)]">
                      <span className="text-lg text-[#7C3AED] dark:text-[#C4B5FD]">🎓</span>
                    </div>
                    <div>
                      <h3 className="font-mono text-base font-bold text-[color:var(--body)]">{edu.degree}</h3>
                      <p className="mt-0.5 font-mono text-xs text-[#7C3AED] dark:text-[#C4B5FD]">{edu.field}</p>
                      <p className="mt-1 font-mono text-xs text-[color:var(--label)]">{edu.institution}</p>
                      <span className="mt-2 inline-block rounded-sm border border-[rgba(124,58,237,0.15)] bg-[var(--tag-purple-bg)] px-2.5 py-1 font-mono text-[10px] text-[var(--tag-purple-text)]">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-[rgba(124,58,237,0.1)] pt-4">
                    <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[color:var(--label)]">Relevant Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.areas.map((area) => (
                        <span
                          key={area}
                          className="rounded-sm border border-[rgba(124,58,237,0.12)] bg-[var(--tag-muted-bg)] px-2.5 py-1 font-mono text-xs text-[var(--tag-muted-text)]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="reveal delay-100 space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className={`glass-panel glass-panel-hover flex gap-4 rounded-lg p-6 ${
                      cert.featured
                        ? 'border-l-4 border-l-[#f97316] bg-[rgba(249,115,22,0.08)] dark:bg-[rgba(249,115,22,0.06)]'
                        : ''
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-lg ${
                        cert.featured ? 'bg-[rgba(249,115,22,0.2)] text-[#ea580c]' : 'bg-[var(--tag-purple-bg)] text-[#7C3AED] dark:text-[#C4B5FD]'
                      }`}
                    >
                      {cert.featured ? '✦' : '🏅'}
                    </div>
                    <div className="min-w-0 flex-1">
                      {cert.featured && (
                        <span className="mb-1 inline-block font-mono text-[10px] uppercase tracking-widest text-[#ea580c] dark:text-[#fb923c]">
                          Featured
                        </span>
                      )}
                      <h4 className="font-mono text-sm font-bold text-[color:var(--body)]">{cert.title}</h4>
                      <p className="mt-1 font-mono text-xs text-[color:var(--body-muted)]">{cert.issuer}</p>
                      {cert.year && <p className="mt-2 font-mono text-xs text-[color:var(--label)]">{cert.year}</p>}
                      {cert.note && (
                        <p className="mt-2 font-mono text-[11px] leading-relaxed text-[#c2410c] dark:text-[#fdba74]">{cert.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="services" className="section-band">
          <div className="max-w-6xl mx-auto">
            <div className="reveal">
              <SectionLabel>What I Offer</SectionLabel>
              <SectionTitle>
                My <span className="text-[#7C3AED] dark:text-[#C4B5FD]">Services</span>
              </SectionTitle>
              <p className="-mt-6 mb-12 max-w-3xl font-sans text-base leading-relaxed text-[color:var(--body-muted)]">
                With a background in AI and Cybersecurity, I bring a security-first mindset to DevOps work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((service, i) => (
                <div
                  key={service.title}
                  className={`reveal glass-panel glass-panel-hover rounded-lg p-6 ${STAGGER_DELAY_500[Math.min(i, 4)]}`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--tag-purple-bg)] text-xl text-[#7C3AED] dark:text-[#C4B5FD]">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 font-mono text-sm font-bold text-[color:var(--body)]">{service.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-[color:var(--body-muted)]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="quotes">
          <div className="max-w-6xl mx-auto">
            <div className="reveal">
              <SectionLabel>Reflections</SectionLabel>
              <SectionTitle>
                From the <span className="text-[#7C3AED] dark:text-[#C4B5FD]">Terminal</span>
              </SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {QUOTES.map((q, i) => (
                <blockquote
                  key={i}
                  className={`reveal glass-panel rounded-lg p-8 border-l-4 border-l-[#7C3AED] ${STAGGER_DELAY_300[Math.min(i, 2)]}`}
                >
                  <p className="mb-4 font-mono text-sm leading-relaxed text-[color:var(--body-muted)] md:text-base">{q.text}</p>
                  <footer className="font-mono text-xs text-[color:var(--label)]">— Mohamed Elhadad</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact">
          <div className="absolute inset-0 bg-radial-violet pointer-events-none opacity-60" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="reveal text-center mb-14">
              <SectionLabel>Get In Touch</SectionLabel>
              <SectionTitle>
                Let&apos;s <span className="text-[#7C3AED] dark:text-[#C4B5FD]">Connect</span>
              </SectionTitle>
              <p className="mx-auto max-w-lg font-sans text-[color:var(--body-muted)]">
                Hiring for DevOps or cloud, or have an AWS project that needs a freelancer? Message me here or by email. Drop a message or reach out directly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="reveal space-y-4">
                {[
                  {
                    label: 'Email',
                    display: 'mohammed.i.elhadad@gmail.com',
                    href: 'mailto:mohammed.i.elhadad@gmail.com',
                    external: false,
                    icon: '✉' as const,
                  },
                  {
                    label: 'Phone',
                    display: '+20 1020884588',
                    href: 'tel:+201020884588',
                    external: false,
                    icon: '☎' as const,
                  },
                  {
                    label: 'LinkedIn',
                    display: 'linkedin.com/in/mohamed-ibrahim-elhadad',
                    href: 'https://www.linkedin.com/in/mohamed-ibrahim-elhadad',
                    external: true,
                    brandIcon: 'linkedin' as const,
                  },
                  {
                    label: 'GitHub',
                    display: 'github.com/mohamed-ibrahim09',
                    href: 'https://github.com/mohamed-ibrahim09',
                    external: true,
                    brandIcon: 'github' as const,
                  },
                  {
                    label: 'Upwork',
                    display: 'Mohamed Elhadad',
                    href: 'https://www.upwork.com/freelancers/~01ec92b3430f913640?mp_source=share',
                    external: true,
                    upwork: true,
                  },
                ].map((item) => (
                  <div key={item.label} className="glass-panel glass-panel-hover flex items-center gap-4 rounded-lg p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[var(--tag-purple-bg)] text-[#7C3AED] dark:text-[#C4B5FD]">
                      {'upwork' in item && item.upwork ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#14a800" aria-hidden>
                          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                        </svg>
                      ) : 'brandIcon' in item && item.brandIcon === 'linkedin' ? (
                        <LinkedInBrandIcon className="h-[18px] w-[18px] text-[#0A66C2]" />
                      ) : 'brandIcon' in item && item.brandIcon === 'github' ? (
                        <GitHubBrandIcon className="h-[18px] w-[18px]" />
                      ) : (
                        'icon' in item && item.icon
                      )}
                    </div>
                    <div>
                      <p className="mb-0.5 font-mono text-[10px] uppercase tracking-widest text-[color:var(--label)]">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="font-mono text-sm text-[#7C3AED] transition-colors hover:text-[#5b21b6] dark:text-[#C4B5FD] dark:hover:text-white"
                      >
                        {item.display}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="reveal delay-200">
                <div className="glass-panel rounded-lg p-7">
                  <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[color:var(--label)]">Send a message</p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-[color:var(--glass-border)] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-xs text-[color:var(--label)]">
            © 2026 Mohamed Elhadad · DevOps Engineer
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-[color:var(--label)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] pulse-dot" />
            <span>Built with Next.js &amp; Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
