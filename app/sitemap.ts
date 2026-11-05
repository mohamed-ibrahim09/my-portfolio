import type { MetadataRoute } from 'next'

const base = 'https://mohamedelhadad.vercel.app'

const blogSlugs = [
  'apache-virtual-hosts',
  'docker-flask-app',
  'compTIA-iam',
  'docker-ai-deployment',
  'cicd-jenkins-kubernetes',
  'deepfake-detection-ai',
  'devops-code-to-production',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/projects', '/experience', '/blog', '/contact', '/featured']
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.7 })),
    ...blogSlugs.map((slug) => ({ url: `${base}/blog/${slug}`, changeFrequency: 'yearly' as const, priority: 0.5 })),
  ]
}
