'use client'

import { useEffect, useState } from 'react'

const terminalLines = [
  '$ whoami',
  'Mohamed Elhadad',
  '',
  '$ cat role.txt',
  'DevOps Engineer @ ALGOcas • AWS Certified Solutions Architect – Associate',
  '',
  '$ git status',
  '→ Building AWS environments, CI/CD pipelines and Kubernetes deployments',
  '→ Security and monitoring built in from the start',
  '→ Open to DevOps roles & AWS freelance projects',
  '',
  '$ ls ~/skills',
  'AWS • Kubernetes • Docker • Jenkins • GitHub Actions • Ansible • Python • AI Agents',
  '',
  '$ explore projects',
]

export function Hero() {
  const [visibleLineIndex, setVisibleLineIndex] = useState(0)
  const [typedCharCount, setTypedCharCount] = useState(0)
  const [complete, setComplete] = useState(false)

  // Respect users who prefer reduced motion: show everything at once.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setComplete(true)
    }
  }, [])

  useEffect(() => {
    if (complete) return

    const currentLine = terminalLines[visibleLineIndex]
    if (typedCharCount < currentLine.length) {
      const timer = setTimeout(() => setTypedCharCount((prev) => prev + 1), 28)
      return () => clearTimeout(timer)
    }

    const lineDelay = setTimeout(() => {
      if (visibleLineIndex === terminalLines.length - 1) {
        setComplete(true)
      } else {
        setVisibleLineIndex((prev) => prev + 1)
        setTypedCharCount(0)
      }
    }, 180)
    return () => clearTimeout(lineDelay)
  }, [complete, typedCharCount, visibleLineIndex])

  // Clicking the terminal skips the animation.
  const skip = () => {
    if (!complete) setComplete(true)
  }

  const formatLine = (line: string) => {
    if (line.startsWith('$ ')) {
      return (
        <p className="text-[#00ff41] font-bold">
          <span className="text-[#00ff41]">$</span> {line.slice(2)}
        </p>
      )
    }
    if (line.startsWith('→')) {
      return <p className="text-[#4ade80]">{line}</p>
    }
    if (line === '') return <p aria-hidden>&nbsp;</p>
    return <p className="text-[#e2e8f0]">{line}</p>
  }

  const shownLines = complete ? terminalLines : terminalLines.slice(0, visibleLineIndex)

  return (
    <section id="hero" onClick={skip} className="min-h-screen flex items-center pt-28 pb-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none hero-scanlines hero-noise" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-7 font-mono fade-in relative z-10 hero-glow">
        <h1 className="sr-only">Mohamed Elhadad — DevOps Engineer at ALGOcas, AWS Certified Solutions Architect – Associate</h1>
        <div className="space-y-1 text-base sm:text-lg leading-8 tracking-wide" aria-hidden={!complete}>
          {shownLines.map((line, idx) => (
            <div key={`${line}-${idx}`}>{formatLine(line)}</div>
          ))}

          {!complete && (
            <div>
              {formatLine(terminalLines[visibleLineIndex].slice(0, typedCharCount))}
            </div>
          )}

          {complete && (
            <>
              <div className="flex flex-wrap gap-3 pt-1">
                <a href="https://github.com/mohamed-ibrahim09" target="_blank" rel="noopener noreferrer" className="terminal-chip-link">
                  [github]
                </a>
                <a href="https://www.linkedin.com/in/mohamed-ibrahim-elhadad" target="_blank" rel="noopener noreferrer" className="terminal-chip-link">
                  [linkedin]
                </a>
                <a href="mailto:mohammed.i.elhadad@gmail.com" className="terminal-chip-link">
                  [email]
                </a>
              </div>
              <div className="flex flex-wrap gap-8 pt-2">
                <a href="#projects" className="text-[#4ade80] hover:text-[#00ff41]">→ view my work</a>
                <a href="#experience" className="text-[#4ade80] hover:text-[#00ff41]">→ experience</a>
                <a href="#contact" className="text-[#4ade80] hover:text-[#00ff41]">→ get in touch</a>
              </div>
            </>
          )}
        </div>
        {!complete && (
          <p className="text-xs text-muted-foreground">click to skip</p>
        )}
      </div>
    </section>
  )
}
