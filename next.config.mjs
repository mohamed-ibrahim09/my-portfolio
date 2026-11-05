/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // The blog was removed; send old links to the home page instead of a 404.
  async redirects() {
    return [
      { source: '/blog', destination: '/', permanent: false },
      { source: '/blog/:slug*', destination: '/', permanent: false },
      // About and Featured were merged into the home page.
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/featured', destination: '/#experience', permanent: true },
    ]
  },
}

export default nextConfig
