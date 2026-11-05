'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { openCommandMenu } from '@/components/CommandMenu'

const LOGO = '>.Elhadad@portfolio:~$'

const navItems = [
  { label: 'Projects', href: '/#projects', section: 'projects' },
  { label: 'Case Study', href: '/#case-study', section: 'case-study' },
  { label: 'Experience', href: '/#experience', section: 'experience' },
  { label: 'Contact', href: '/#contact', section: 'contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [activeSection, setActiveSection] = useState('')
  const [typed, setTyped] = useState(0)
  const [isMac, setIsMac] = useState(false)

  // Type the logo once, then leave a blinking cursor.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(LOGO.length)
      return
    }
    if (typed >= LOGO.length) return
    const t = setTimeout(() => setTyped((n) => n + 1), 45)
    return () => clearTimeout(t)
  }, [typed])

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform))
  }, [])

  useEffect(() => {
    if (!isHome) {
      setActiveSection('')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id)
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: '-20% 0px -35% 0px' },
    )
    navItems.forEach(({ section }) => {
      const el = document.getElementById(section)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [isHome])

  const linkClass = (section: string) =>
    `nav-link text-sm ${isHome && activeSection === section ? 'nav-link-active' : ''}`

  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border no-print" aria-label="Main">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/#hero"
            className="font-mono text-base sm:text-lg text-primary hover:text-[#b4ffc8]"
          >
            <span className="sr-only">{LOGO} (back to top)</span>
            <span aria-hidden>{LOGO.slice(0, typed)}</span>
            <span className="cursor-block" aria-hidden />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link key={item.section} href={item.href} className={linkClass(item.section)}>
                <span>{item.label}</span>
              </Link>
            ))}
            <Link href="/cv" className="nav-link text-sm">
              <span>CV</span>
            </Link>
            <button
              type="button"
              onClick={openCommandMenu}
              className="text-xs text-muted-foreground border border-border px-2 py-1 hover:border-primary hover:text-primary"
              aria-label={`${isMac ? '⌘' : 'Ctrl'} K, open command menu`}
            >
              {isMac ? '⌘' : 'Ctrl'} K
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 fade-in flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.section}
                href={item.href}
                className={`${linkClass(item.section)} py-1`}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            ))}
            <Link href="/cv" className="nav-link text-sm py-1" onClick={() => setIsOpen(false)}>
              <span>CV</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
