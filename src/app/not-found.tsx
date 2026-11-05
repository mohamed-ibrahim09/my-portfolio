'use client';

import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export default function NotFound() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-void noise-overlay">
      <header className="border-b border-[color:var(--glass-border)] glass-panel">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <AppLogo size={24} iconName="CommandLineIcon" text="Mohamed Elhadad" className="text-[color:var(--body)]" />
          </Link>
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest md:flex" aria-label="Primary">
            {[
              { label: 'Home', href: '/' },
              { label: 'Skills', href: '/#skills' },
              { label: 'Projects', href: '/#projects' },
              { label: 'Services', href: '/#services' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[color:var(--body-faint)] transition-colors duration-300 hover:text-[#7C3AED] dark:hover:text-[#C4B5FD]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-0.5 md:gap-2">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="btn-ghost hidden items-center gap-2 rounded-sm px-5 py-2.5 font-mono text-xs uppercase tracking-widest md:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED] pulse-dot" />
              Hire Me
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
        <div className="pointer-events-none absolute inset-0 bg-radial-violet opacity-80" />
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />

        <div className="relative z-10 w-full max-w-xl">
          <div className="glass-panel terminal-window overflow-hidden rounded-lg border border-[rgba(124,58,237,0.2)]">
            <div className="terminal-chrome flex items-center gap-2 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <div className="h-3 w-3 rounded-full bg-[#28CA41]" />
              <span className="ml-3 font-mono text-xs text-[rgba(226,232,240,0.35)]">404.sh</span>
            </div>
            <div className="terminal-body space-y-4 p-8 font-mono text-sm md:p-10">
              <p className="text-lg tracking-tight text-white md:text-xl">404 ~ ./page_not_found.sh</p>
              <p className="font-sans text-sm leading-relaxed text-[rgba(226,232,240,0.55)]">
                Looks like this path doesn&apos;t exist.
              </p>
              <div className="pt-4">
                <Link
                  href="/"
                  className="btn-solid inline-flex items-center gap-2 rounded-sm px-6 py-3 font-mono text-sm uppercase tracking-widest"
                >
                  ← Back to Home
                </Link>
              </div>
              <span className="inline-block animate-[blink_1s_step-end_infinite] text-[#7C3AED]">▋</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto border-t border-[color:var(--glass-border)] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-xs text-[color:var(--label)]">
            © 2026 Mohamed Elhadad · DevOps Engineer
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-[color:var(--label)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED] pulse-dot" />
            <span>Built with Next.js &amp; Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
