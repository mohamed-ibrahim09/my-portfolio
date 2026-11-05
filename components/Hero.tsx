'use client'

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { profile, proof, projects, skills } from '@/lib/data'
import { openCommandMenu } from '@/components/CommandMenu'

const introLines = [
  '$ whoami',
  profile.name,
  '',
  '$ cat role.txt',
  profile.headline,
  '',
  '$ git status',
  '→ Building AWS environments, CI/CD pipelines and Kubernetes deployments',
  '→ Security and monitoring built in from the start',
  '→ Open to DevOps roles & AWS freelance projects',
]

type Entry = { cmd: string; out: ReactNode }

const HELP = [
  ['about', 'who I am'],
  ['projects', 'what I built'],
  ['case-study', 'the ALGOcas integration platform'],
  ['experience', 'where I worked'],
  ['skills', 'tools I use'],
  ['contact', 'get in touch'],
  ['cv', 'open my CV'],
  ['github · linkedin · writing', 'open a profile'],
  ['menu', 'open the command menu (Ctrl+K)'],
  ['clear', 'clear the screen'],
]

function formatLine(line: string) {
  if (line.startsWith('$ ')) {
    return (
      <p className="text-primary font-bold">
        $ <span>{line.slice(2)}</span>
      </p>
    )
  }
  if (line.startsWith('→')) return <p className="text-primary/80">{line}</p>
  if (line === '') return <p aria-hidden>&nbsp;</p>
  return <p className="text-[#e2e8f0]">{line}</p>
}

export function Hero() {
  const router = useRouter()
  const [lineIndex, setLineIndex] = useState(0)
  const [chars, setChars] = useState(0)
  const [complete, setComplete] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<Entry[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setComplete(true)
  }, [])

  useEffect(() => {
    if (complete) return
    const line = introLines[lineIndex]
    if (chars < line.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 22)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      if (lineIndex === introLines.length - 1) setComplete(true)
      else {
        setLineIndex((i) => i + 1)
        setChars(0)
      }
    }, 140)
    return () => clearTimeout(t)
  }, [complete, chars, lineIndex])

  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const open = (url: string) => window.open(url, '_blank', 'noopener,noreferrer')

  const run = (raw: string): ReactNode => {
    const cmd = raw.trim().toLowerCase().replace(/^(cd|cat|ls|open)\s+/, '').replace(/[./~]/g, '')
    switch (cmd) {
      case '':
        return null
      case 'help':
        return (
          <div className="grid grid-cols-[auto_1fr] gap-x-6">
            {HELP.map(([c, d]) => (
              <span key={c} className="contents">
                <span className="text-primary">{c}</span>
                <span className="text-foreground">{d}</span>
              </span>
            ))}
          </div>
        )
      case 'whoami':
        return `${profile.name} — ${profile.headline}`
      case 'about':
      case 'abouttxt':
        jump('about')
        return 'opening about.txt …'
      case 'projects':
        jump('projects')
        return projects.map((p) => p.name).join('  ·  ')
      case 'case-study':
      case 'casestudy':
        jump('case-study')
        return 'opening case-study.md …'
      case 'experience':
        jump('experience')
        return 'opening experience.log …'
      case 'skills':
        return skills.map((s) => `${s.category}: ${s.items.slice(0, 5).join(', ')}`).join('\n')
      case 'contact':
      case 'contactsh':
        jump('contact')
        return `email: ${profile.email}`
      case 'email':
        window.location.href = `mailto:${profile.email}`
        return `opening mail to ${profile.email} …`
      case 'cv':
      case 'resume':
        router.push('/cv')
        return 'opening cv …'
      case 'github':
        open(profile.links.github)
        return 'opening github …'
      case 'linkedin':
        open(profile.links.linkedin)
        return 'opening linkedin …'
      case 'writing':
        open(profile.links.writing)
        return 'opening my Arabic writing …'
      case 'menu':
        openCommandMenu()
        return 'opening command menu …'
      case 'sudo hire-me':
      case 'sudo hire me':
      case 'hire-me':
        jump('contact')
        return '[sudo] permission granted. Taking you to the contact form …'
      default:
        return `command not found: ${raw.trim()} — type 'help'`
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const value = input
    setInput('')
    if (value.trim().toLowerCase() === 'clear') {
      setHistory([])
      return
    }
    setHistory((h) => [...h.slice(-6), { cmd: value, out: run(value) }])
  }

  const onTerminalClick = () => {
    if (!complete) setComplete(true)
    else inputRef.current?.focus({ preventScroll: true })
  }

  const shown = complete ? introLines : introLines.slice(0, lineIndex)

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none hero-scanlines hero-noise" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full font-mono relative z-10">
        <h1 className="sr-only">{`${profile.name} — ${profile.headline}`}</h1>

        <div
          className="border border-primary/40 bg-background/80 backdrop-blur-sm shadow-[0_0_60px_rgba(0,255,65,0.08)]"
          onClick={onTerminalClick}
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-primary/25 text-xs text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" aria-hidden />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" aria-hidden />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" aria-hidden />
            <span className="ml-3 whitespace-nowrap truncate">elhadad@portfolio: ~</span>
            {!complete && (
              <span className="ml-auto whitespace-nowrap">
                <span className="sm:hidden">tap to skip</span>
                <span className="hidden sm:inline">click to skip</span>
              </span>
            )}
          </div>

          <div className="p-5 sm:p-7 text-sm sm:text-base leading-7 space-y-0.5" aria-hidden={!complete}>
            {shown.map((line, idx) => (
              <div key={idx}>{formatLine(line)}</div>
            ))}
            {!complete && <div>{formatLine(introLines[lineIndex].slice(0, chars))}</div>}

            {complete && (
              <div className="pt-4 space-y-5 fade-in">
                <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {proof.map((p) => (
                    <div key={p.label} className="border border-primary/25 px-3 py-2">
                      <dt className="sr-only">{p.label}</dt>
                      <dd className="text-primary text-lg font-bold leading-tight">{p.value}</dd>
                      <dd className="text-xs text-muted-foreground leading-snug">{p.label}</dd>
                    </div>
                  ))}
                </dl>

                <div className="flex flex-wrap gap-3 text-sm">
                  <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="terminal-chip-link">[github]</a>
                  <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="terminal-chip-link">[linkedin]</a>
                  <a href={`mailto:${profile.email}`} className="terminal-chip-link">[email]</a>
                  <a href={profile.links.writing} target="_blank" rel="noopener noreferrer" className="terminal-chip-link" lang="en">
                    [writing · عربي]
                  </a>
                  <a href="/cv" className="terminal-chip-link bg-primary/10">[cv]</a>
                </div>

                <div className="space-y-2 text-sm">
                  {history.map((h, i) => (
                    <div key={i}>
                      <p>
                        <span className="text-primary">$</span> <span className="text-[#e2e8f0]">{h.cmd}</span>
                      </p>
                      {h.out && <div className="text-foreground whitespace-pre-line pl-4">{h.out}</div>}
                    </div>
                  ))}
                  <form onSubmit={onSubmit} className="flex items-center gap-2">
                    <label htmlFor="terminal-input" className="text-primary shrink-0">
                      $
                    </label>
                    <input
                      id="terminal-input"
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      placeholder="type 'help' and press enter"
                      aria-label="Terminal command. Type help for a list of commands."
                      className="flex-1 bg-transparent text-[#e2e8f0] placeholder:text-muted-foreground/70 outline-none focus-visible:outline-none caret-[#00ff41]"
                    />
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
