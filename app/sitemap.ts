import type { MetadataRoute } from 'next'

const base = 'https://mohamedelhadad.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/projects', '/experience', '/contact', '/featured']
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.7 })),
  ]
}
