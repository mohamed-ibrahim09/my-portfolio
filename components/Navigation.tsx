'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [activeSection, setActiveSection] = useState<string>('')
  const [typedLogo, setTypedLogo] = useState('')
  const logoText = '>.Elhadad@portfolio:~$'

  const navItems = [
    { label: 'Projects', href: '/#projects', section: 'projects' },
    { label: 'Experience', href: '/#experience', section: 'experience' },
    { label: 'Blog', href: '/#blog', section: 'blog' },
    { label: 'Contact', href: '/#contact', section: 'contact' },
  ]

  const handleLogoClick = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    let index = 0
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const type = () => {
      if (index <= logoText.length) {
        setTypedLogo(logoText.slice(0, index))
        index += 1
        timeoutId = setTimeout(type, 55)
      } else {
        timeoutId = setTimeout(() => {
          index = 0
          setTypedLogo('')
          type()
        }, 900)
      }
    }

    type()
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (!isHome) {
      setActiveSection('')
      return
    }

    const sections = ['projects', 'experience', 'blog', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      { threshold: [0.35, 0.5, 0.7], rootMargin: '-20% 0px -35% 0px' },
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isHome])

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {isHome ? (
            <button
              type="button"
              onClick={handleLogoClick}
              className="text-lg mb-4 md:mb-0 font-mono text-[#00ff41] hover:text-green-300 transition-colors cursor-pointer"
            >
              {typedLogo}
            </button>
          ) : (
            <Link
              href="/#about"
              className="text-lg mb-4 md:mb-0 font-mono text-[#00ff41] hover:text-green-300 transition-colors cursor-pointer"
            >
              {typedLogo}
            </Link>
          )}

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {navItems.map((item, index) => (
              <div
                key={item.section}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  href={item.href}
                  className={`nav-link text-sm ${isHome && activeSection === item.section ? 'nav-link-active' : ''}`}
                >
                  <span>{item.label}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 absolute right-4 top-4 hover:scale-110 active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 fade-in">
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <div
                  key={item.section}
                  className="fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Link
                    href={item.href}
                    className={`nav-link text-sm py-2 inline-block ${isHome && activeSection === item.section ? 'nav-link-active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
