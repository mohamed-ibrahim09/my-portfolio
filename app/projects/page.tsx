'use client'

import { useState } from 'react'
import { SectionHeader } from '@/components/SectionHeader'
import { ProjectCard } from '@/components/ProjectCard'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const projects = [
    {
      name: 'AIOps Incident Copilot',
      description:
        'Human-approved auto-remediation on AWS. A CloudWatch alarm fires, Amazon Bedrock explains it in plain English, I approve on Telegram, and a fixed Systems Manager runbook rolls the release back. The AI advises, the human decides, and the runbook is the only thing allowed to act.',
      role: 'Personal Project',
      achievements: [
        'Step Functions workflow from alarm to Bedrock summary to Telegram approval to SSM rollback',
        'Whole stack deployed as one CloudFormation template',
        'Repository includes a CI workflow, deployment steps, cost notes and lessons learned',
      ],
      tags: ['CloudFormation', 'CloudWatch', 'Amazon Bedrock', 'Step Functions', 'Lambda', 'SSM', 'Python'],
      stats: ['Human-in-the-loop', 'Infrastructure as Code', 'Auto-rollback'],
      category: 'AWS / DevOps',
      github: 'https://github.com/mohamed-ibrahim09/AIOps-Incident-Copilot',
      status: 'Completed',
    },
    {
      name: 'AWS Agentic Travel Assistant',
      description:
        'A serverless AI travel agent built with the Strands Agents SDK. It searches flights, fetches live weather from the National Weather Service, remembers conversations in S3, answers from a private knowledge base with RAG, and books or cancels tickets through MCP servers.',
      role: 'Personal Project',
      achievements: [
        'REST API secured with API Gateway and Cognito',
        'Every request traced through CloudWatch and X-Ray',
        'Tool use, memory, RAG and MCP combined in one agent',
      ],
      tags: ['Strands Agents', 'Amazon Bedrock', 'API Gateway', 'Cognito', 'Lambda', 'S3', 'X-Ray', 'MCP'],
      stats: ['Serverless', 'RAG', 'MCP'],
      category: 'AI/ML',
      github: 'https://github.com/mohamed-ibrahim09/AWS-Agentic-Travel-Assistant',
      status: 'Completed',
    },
    {
      name: 'AWS Backup & Disaster Recovery',
      description:
        'An enterprise backup and disaster recovery pipeline. Most backup guides stop at "backup completed". This one restores the workload in a second AWS Region and validates it end to end, with RPO and RTO in mind.',
      role: 'Personal Project',
      achievements: [
        'AWS Backup with KMS encryption and Backup Vault Lock for immutable backups',
        'Cross-Region backup replication from us-east-1',
        'Full DR simulation: restored an Nginx workload on EC2 in another Region and validated it',
      ],
      tags: ['AWS Backup', 'KMS', 'Vault Lock', 'EC2', 'Nginx', 'Linux'],
      stats: ['Cross-Region DR', 'Immutable Backups', 'Restore Tested'],
      category: 'AWS / DevOps',
      github: 'https://github.com/mohamed-ibrahim09/aws-backup-disaster-recovery',
      status: 'Completed',
    },
    {
      name: 'AWS Cloud Infrastructure Dashboard',
      description:
        'A multi-AZ web application on AWS demonstrating load balancing, EC2 Auto Scaling and CloudWatch monitoring, with a FastAPI backend, a React frontend and Nginx as reverse proxy.',
      role: 'Personal Project',
      achievements: [
        'Application Load Balancer in front of an Auto Scaling Group across Availability Zones',
        'TLS with ACM and DNS with Route 53',
        'CloudWatch metrics and alarms for the running service',
      ],
      tags: ['EC2', 'ALB', 'Auto Scaling', 'CloudWatch', 'ACM', 'Route 53', 'FastAPI', 'React'],
      stats: ['Multi-AZ', 'Auto Scaling', 'Monitoring'],
      category: 'AWS / DevOps',
      github: 'https://github.com/mohamed-ibrahim09/AWS-Cloud-Infrastructure-Dashboard',
      status: 'Completed',
    },
    {
      name: 'AI-Based DeepFake Face Detection',
      description:
        'As part of a 6-member team, built a deepfake detection system that classifies real vs. AI-generated human faces. The system achieved 99.7% test accuracy and a ROC-AUC of 0.999, trained on the Kaggle 140k Real and Fake Faces dataset using Xception and Swin Transformer v2 architectures.',
      role: 'Full Stack Developer',
      achievements: [
        'Built full Flask web application (HTML, CSS, JavaScript) for real-time face classification predictions',
        'Implemented Swin Transformer v2 with custom classification head using PyTorch and TIMM',
        'Designed complete training pipeline with AdamW optimizer, differential learning rates, and early stopping',
        'Test Accuracy: 99.7% | Validation Accuracy: 99.81% | ROC-AUC: 0.999',
        'Dataset: 140,000 images (70k real, 70k fake)',
      ],
      tags: ['Python', 'PyTorch', 'Flask', 'Deep Learning', 'Computer Vision'],
      stats: ['99.7% Accuracy', 'ROC-AUC: 0.999', '140k Dataset', 'Flask'],
      category: 'AI/ML',
      github: 'https://github.com/ahmed-shamh/AI-Based-Real-vs-Fake-Face-Classification',
      // Team repository (6 members); hosted on a teammate's account.
      status: 'Completed',
    },
  ]

  const categories = ['All', 'AWS / DevOps', 'AI/ML']

  const filteredProjects = selectedCategory === 'All' || !selectedCategory
    ? projects
    : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          command="elhadad@portfolio:~$ projects"
          description="AWS, DevOps and AI projects. Every one links to its source on GitHub."
        />

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-4 py-2 text-sm border transition-all duration-200 ${
                (category === 'All' && !selectedCategory) || selectedCategory === category
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category</p>
          </div>
        )}
      </div>
    </div>
  )
}
