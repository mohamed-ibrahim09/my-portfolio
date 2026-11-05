import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mohamedelhadad.vercel.app'),
  title: 'Mohamed Elhadad — DevOps Engineer | AWS, CI/CD, Kubernetes',
  description:
    'DevOps Engineer at ALGOcas and AWS Certified Solutions Architect – Associate. I build AWS environments, CI/CD pipelines and Kubernetes deployments with security and monitoring built in. Open to AWS freelance projects.',
  openGraph: {
    title: 'Mohamed Elhadad — DevOps Engineer | AWS, CI/CD, Kubernetes',
    description:
      'DevOps Engineer at ALGOcas. AWS Certified Solutions Architect – Associate.',
    url: 'https://mohamedelhadad.vercel.app',
    siteName: 'Mohamed Elhadad',
    images: [{ url: '/og-preview.png', width: 1200, height: 630, alt: 'Mohamed Elhadad Portfolio' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="transition-[background-color,color] duration-300 ease-out">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen transition-[background-color,color] duration-300 ease-out">{children}</body>
    </html>
  );
}
