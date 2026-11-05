import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mohamed Elhadad',
    short_name: 'Mohamed',
    description:
      'Portfolio of Mohamed Elhadad — DevOps Engineer focused on AWS, CI/CD, Kubernetes, and cloud security.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090B',
    theme_color: '#09090B',
    icons: [
      { src: '/icon', sizes: '64x64', type: 'image/png' },
      { src: '/icon', sizes: '192x192', type: 'image/png' },
      { src: '/icon', sizes: '512x512', type: 'image/png' },
    ],
  };
}
