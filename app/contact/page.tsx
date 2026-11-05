'use client'

import { useState } from 'react'
import { Mail, MapPin, Linkedin, Github, FileText } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { profile } from '@/lib/data'

const FORMSPREE_URL = 'https://formspree.io/f/mzdkwwvz'

const inputClass =
  'w-full px-3 py-2.5 bg-background border border-border text-[#e2e8f0] placeholder:text-muted-foreground focus:border-primary focus-visible:outline-none focus:shadow-[0_0_0_1px_#00ff41]'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitType, setSubmitType] = useState<'success' | 'error' | ''>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      if (response.ok) {
        setSubmitType('success')
        setSubmitMessage("message sent ✓  I'll get back to you as soon as possible.")
        setFormState({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitType('error')
        setSubmitMessage('error: message not sent. Please try again or email me directly.')
      }
    } catch {
      setSubmitType('error')
      setSubmitMessage('error: network problem. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    { icon: Mail, label: 'email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'linkedin', value: 'in/mohamed-ibrahim-elhadad', href: profile.links.linkedin, external: true },
    { icon: Github, label: 'github', value: '@mohamed-ibrahim09', href: profile.links.github, external: true },
    { icon: FileText, label: 'cv', value: 'view or save as PDF', href: '/cv' },
  ]

  return (
    <div className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-mono">
        <SectionHeader
          command="./contact.sh"
          title="Contact"
          description="Hiring for DevOps or cloud, or have an AWS project that needs a freelancer? Send a message or email me directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            {contactMethods.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="terminal-card !p-4 flex items-center gap-4 group"
              >
                <Icon size={20} className="text-primary shrink-0" aria-hidden />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-[#e2e8f0] break-all group-hover:text-primary">{value}</p>
                </div>
              </a>
            ))}
            <p className="flex items-center gap-2 text-sm text-muted-foreground px-1 pt-1">
              <MapPin size={16} className="text-primary" aria-hidden />
              {profile.location} · open to remote
            </p>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 terminal-card space-y-5" aria-label="Contact form">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-primary mb-1.5">
                  --name
                </label>
                <input id="name" name="name" value={formState.name} onChange={handleChange} required autoComplete="name" placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-primary mb-1.5">
                  --email
                </label>
                <input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required autoComplete="email" placeholder="you@company.com" className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-primary mb-1.5">
                --subject
              </label>
              <input id="subject" name="subject" value={formState.subject} onChange={handleChange} placeholder="Role, project or question" className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-primary mb-1.5">
                --message
              </label>
              <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={6} placeholder="Tell me about the role or project…" className={`${inputClass} resize-none`} />
            </div>

            {submitMessage && (
              <p role="status" className={`text-sm border p-3 ${submitType === 'success' ? 'border-primary/50 text-primary' : 'border-red-500/50 text-red-400'}`}>
                {submitMessage}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-primary text-background font-bold hover:bg-[#b4ffc8] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'sending…' : '$ send --message'}
              </button>
              <p className="text-xs text-muted-foreground">Your details are only used to reply to you.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
