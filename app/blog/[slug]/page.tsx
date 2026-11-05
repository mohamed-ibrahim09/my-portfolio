import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { notFound } from 'next/navigation'
import { TypingText } from '@/components/TypingText'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  category: string
  content: string
}

const blogPosts: Record<string, BlogPost> = {
  'apache-virtual-hosts': {
    slug: 'apache-virtual-hosts',
    title: 'Setting Up Apache Virtual Hosts on Ubuntu',
    excerpt: 'A practical guide to hosting multiple sites on one Ubuntu server using Apache virtual hosts, SSL, and basic hardening.',
    date: 'April 2026',
    readTime: '5 min read',
    image: '/blog-devops-workflow.jpg',
    category: 'Tutorial',
    content: `Apache virtual hosts let you serve multiple domains from a single Linux server. This walkthrough covers an end-to-end setup that is useful for labs and production-like practice.

## Server Preparation

Update packages, install Apache2, and verify required modules such as ssl and rewrite are enabled. Keep your configuration changes isolated in dedicated files under sites-available.

## Creating Virtual Host Files

Create one .conf file per site, set ServerName and DocumentRoot correctly, and use a clean directory structure. Validate syntax with apache2ctl configtest before reloading.

## Enabling Sites and DNS Mapping

Enable each site with a2ensite and reload Apache. For local testing, map hostnames in your hosts file. In production, ensure DNS A records point to your server.

## SSL and Basic Authentication

Issue TLS certificates and redirect HTTP to HTTPS. Protect sensitive paths with .htaccess and htpasswd for basic authentication where needed.

## Troubleshooting Tips

Use Apache error/access logs to debug 404, permission, and rewrite problems. Verify file ownership and directory permissions to avoid common deployment issues.

With these steps, your Apache setup becomes secure, maintainable, and ready to host multiple projects from one machine.`,
  },
  'docker-flask-app': {
    slug: 'docker-flask-app',
    title: 'Docker from Zero: Containerizing a Flask App',
    excerpt: 'Build, run, and optimize a Flask container image from scratch, including dependency management and production-ready practices.',
    date: 'April 2026',
    readTime: '8 min read',
    image: '/blog-docker-ai.jpg',
    category: 'DevOps',
    content: `Containerizing Flask apps makes deployments consistent across local development and production. This guide covers a practical Docker workflow from first image to optimized runtime.

## Minimal Flask App Structure

Start with a clear project layout: application package, entrypoint, requirements file, and environment configuration. Keep secrets out of the image by using runtime environment variables.

## Writing the Dockerfile

Use a slim Python base image, copy requirements first for better layer caching, and install dependencies before copying application code. Expose the app port and use a production server like gunicorn.

## Build and Run Commands

Build the image with docker build and test it locally using docker run. Validate endpoint health and inspect logs to confirm startup behavior and dependency integrity.

## Optimization and Security

Reduce image size by cleaning caches and pinning dependencies. Run the container with a non-root user, and set explicit resource limits when deploying.

## Deployment Readiness

Tag images with meaningful versions, push to a registry, and automate build pipelines with CI. This creates a repeatable path from commit to deployment.

Once containerized correctly, Flask services become easier to ship, scale, and maintain.`,
  },
  'compTIA-iam': {
    slug: 'compTIA-iam',
    title: 'CompTIA Security+: IAM Explained',
    excerpt: 'A clear breakdown of Identity and Access Management concepts: authentication, authorization, least privilege, and practical controls.',
    date: 'April 2026',
    readTime: '6 min read',
    image: '/blog-cicd-jenkins.jpg',
    category: 'Security',
    content: `Identity and Access Management (IAM) is foundational to secure systems. CompTIA Security+ highlights IAM as a core discipline for reducing risk and enforcing policy.

## Authentication vs Authorization

Authentication verifies who a user is. Authorization defines what that user can do. Mixing these concepts leads to insecure implementations and poor auditability.

## Core IAM Principles

Apply least privilege and role-based access control (RBAC). Grant only the permissions needed for tasks, and separate duties to reduce abuse or accidental damage.

## MFA and Credential Hygiene

Multi-factor authentication adds a critical defense layer. Pair it with strong password policy, secret rotation, and secure credential storage.

## Provisioning and Deprovisioning

Automate account lifecycle management: onboarding, role changes, and immediate offboarding. Stale accounts are a common source of security incidents.

## Logging and Auditing

Track access events and permission changes. Auditable IAM policies help incident response and compliance efforts.

Strong IAM design improves both security posture and operational reliability across engineering teams.`,
  },
  'docker-ai-deployment': {
    slug: 'docker-ai-deployment',
    title: 'Building and Deploying AI Models with Docker',
    excerpt: 'Learn how to containerize machine learning models and deploy them at scale using Docker. Master the complete workflow from model training to production deployment.',
    date: 'April 2026',
    readTime: '7 min read',
    image: '/blog-docker-ai.jpg',
    category: 'AI',
    content: `Containerizing AI models with Docker has become a best practice in machine learning deployment. This comprehensive guide walks you through building, testing, and deploying AI models using Docker containers.

## Why Docker for AI Models

Docker provides consistency, reproducibility, and scalability for machine learning workflows. By containerizing your models, you ensure they run identically across development, testing, and production environments.

## Building a Docker Image for ML Models

Start by creating a Dockerfile that includes your AI framework, dependencies, and model files. We'll cover Python environments, GPU support, and optimizing image size for faster deployments.

## Model Inference Services

Build a FastAPI or Flask service that loads your trained model and exposes it through REST APIs. This allows other applications to request predictions from your containerized model.

## Scaling with Kubernetes

Deploy your containerized models on Kubernetes for automatic scaling, load balancing, and high availability. Learn about replicas, services, and ingress configuration for production AI systems.

## Real-World Example

Deploy a deepfake detection model in Docker, expose it through an API, and scale it to handle thousands of requests per second. Monitor performance and manage model updates seamlessly.

The combination of Docker and AI creates powerful, scalable systems ready for real-world applications.`,
  },
  'cicd-jenkins-kubernetes': {
    slug: 'cicd-jenkins-kubernetes',
    title: 'CI/CD Pipelines with Jenkins and Kubernetes',
    excerpt: 'Master automated deployment pipelines using Jenkins and Kubernetes. Build robust CI/CD workflows that deploy code safely and reliably to production.',
    date: 'April 2026',
    readTime: '10 min read',
    image: '/blog-cicd-jenkins.jpg',
    category: 'DevOps',
    content: `Continuous Integration and Continuous Deployment are essential practices in modern software development. This guide shows you how to build powerful CI/CD pipelines using Jenkins and Kubernetes.

## Understanding CI/CD

Continuous Integration automates testing and building of code. Continuous Deployment automatically pushes tested code to production. Together, they enable rapid, reliable software delivery.

## Setting Up Jenkins

Install Jenkins and configure it as a central automation server. Learn about declarative pipelines, stages, and how Jenkins orchestrates your entire deployment workflow.

## Building Automated Pipelines

Create multi-stage pipelines that handle code checkout, building, testing, Docker image creation, and Kubernetes deployment. Implement quality gates that prevent bad code from reaching production.

## Kubernetes Deployment

Deploy your applications on Kubernetes clusters managed by Jenkins. Configure automatic scaling, health checks, and rolling updates for zero-downtime deployments.

## Monitoring and Rollbacks

Set up monitoring to detect deployment issues. Learn how to quickly rollback failed deployments and notify teams of pipeline events.

## Production-Ready Example

Build a complete CI/CD pipeline that deploys a microservices application, runs integration tests, and manages production Kubernetes clusters. Handle failures gracefully and maintain system stability.

Modern CI/CD practices enable teams to deploy code confidently and frequently.`,
  },
  'deepfake-detection-ai': {
    slug: 'deepfake-detection-ai',
    title: 'How Deepfake Detection Works in AI Systems',
    excerpt: 'Explore the technical details of deepfake detection systems. Understand how deep learning identifies AI-generated faces and protects against synthetic media.',
    date: 'April 2026',
    readTime: '9 min read',
    image: '/blog-deepfake-detection.jpg',
    category: 'AI',
    content: `Deepfake detection has become crucial in combating misinformation. This article explores how AI systems detect synthetic faces and why this technology matters.

## The Deepfake Problem

Deepfakes use deep learning to create convincing synthetic videos and images. As generation techniques improve, detection becomes increasingly challenging and important.

## Detection Architectures

Explore various neural network architectures used for detection: CNNs, Vision Transformers, and hybrid approaches. Each has different strengths in identifying subtle artifacts.

## Understanding Artifacts

Deepfakes leave subtle traces: inconsistent lighting, unnatural eye movements, audio-visual mismatches. Advanced models learn to detect these artifacts that humans might miss.

## The Xception Architecture

The Xception model, based on depthwise separable convolutions, has proven highly effective for deepfake detection. Learn why its architecture is particularly suited to this task.

## Vision Transformers

Vision Transformers offer an alternative approach by processing images as sequences of patches. They can capture both local artifacts and global context for better detection.

## Training Datasets

Effective detection requires diverse training data. The Kaggle 140k Real and Fake Faces dataset provides the scale needed for robust model training.

## Deployment Challenges

Deploying detection systems requires balancing accuracy, speed, and false positive rates. Learn about model quantization and optimization for production systems.

## Future of Deepfake Detection

As generation technology evolves, detection must evolve too. Continuous dataset updates and model improvements are essential for staying ahead.

Deepfake detection represents a crucial application of AI in protecting information integrity.`,
  },
  'devops-code-to-production': {
    slug: 'devops-code-to-production',
    title: 'From Code to Production: DevOps Workflow Explained',
    excerpt: 'A complete walkthrough of the modern DevOps workflow. From writing code to running in production, understand each step and best practices.',
    date: 'April 2026',
    readTime: '8 min read',
    image: '/blog-devops-workflow.jpg',
    category: 'DevOps',
    content: `The journey from writing code to running applications in production involves many steps. This guide explains the modern DevOps workflow and best practices.

## The DevOps Philosophy

DevOps breaks down barriers between development and operations teams. By automating and monitoring the entire software lifecycle, teams can deploy faster and more reliably.

## Development Phase

Start with version control using Git. Write code, commit frequently, and use feature branches to keep the main codebase stable. Code reviews ensure quality before merging.

## Continuous Integration

When code is pushed, automated systems build the application, run unit tests, and perform static analysis. This catches issues early and prevents broken code from reaching production.

## Building Artifacts

Create Docker images that package your application with all dependencies. Use multi-stage builds to optimize image size. Push images to a container registry for storage and distribution.

## Testing Phase

Run comprehensive tests: unit tests, integration tests, and end-to-end tests. Use test environments that mirror production to catch environment-specific issues.

## Deployment Strategy

Choose a deployment strategy: blue-green, canary, or rolling updates. Each approach minimizes downtime and risk during releases.

## Infrastructure as Code

Define your infrastructure using code (Terraform, Ansible, CloudFormation). This enables reproducible, version-controlled infrastructure changes.

## Production Environment

Deploy to production using orchestration tools like Kubernetes. Configure auto-scaling, load balancing, and health checks for reliability.

## Monitoring and Observability

Implement comprehensive logging, metrics, and tracing. Alert teams to issues before users notice them. Use dashboards to understand system health.

## Continuous Improvement

Collect metrics on deployment frequency, lead time, failure rate, and recovery time. Use this data to continuously improve your workflow.

From code to production, DevOps practices ensure reliability, speed, and quality.`,
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }
  return {
    title: `${post.title} - Mohamed Elhadad`,
    description: post.excerpt,
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  const sections = post.content.split('\n\n')

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-primary font-semibold mb-12 hover:gap-3 transition-all duration-200"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        {/* Post Header */}
        <article className="space-y-8 animate-[slideInUp_0.6s_ease-out]">
          {/* Meta */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            {/* Post Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image with fade-in */}
          <div className="relative h-64 sm:h-96 rounded-lg overflow-hidden animate-[fadeIn_0.8s_ease-out]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            {post.excerpt}
          </p>

          {/* Content with typing animation for first section */}
          <div className="text-foreground leading-relaxed space-y-6">
            {sections.map((section, idx) => {
              if (section.startsWith('##')) {
                const title = section.replace('## ', '')
                return (
                  <h2 key={idx} className="text-3xl font-bold text-foreground mt-8 mb-4">
                    {title}
                  </h2>
                )
              }

              // Typing animation for first content section, normal for others
              if (idx === 0) {
                return (
                  <p key={idx} className="text-lg leading-relaxed">
                    <TypingText text={section} speed={15} />
                  </p>
                )
              }

              return (
                <p key={idx} className="text-lg leading-relaxed">
                  {section}
                </p>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-12 pt-8 border-t border-border space-y-8">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Ready to Implement These Ideas?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Have questions or want to discuss how these concepts apply to your projects? Let&apos;s connect.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </article>

        {/* Back to Blog */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
          >
            <ArrowLeft size={20} />
            Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  )
}
