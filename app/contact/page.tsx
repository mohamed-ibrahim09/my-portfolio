'use client'

import { useState } from 'react'
import { Mail, MapPin, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

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
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mzdkwwvz', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setSubmitType('success')
        setSubmitMessage("Thanks for reaching out! I'll get back to you as soon as possible.")
        setFormState({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => {
          setSubmitMessage('')
          setSubmitType('')
        }, 5000)
      } else {
        setSubmitType('error')
        setSubmitMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitType('error')
      setSubmitMessage('Error sending message. Please try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohammed.i.elhadad@gmail.com',
      href: 'mailto:mohammed.i.elhadad@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      href: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'in/mohamed-ibrahim-elhadad',
      href: 'https://www.linkedin.com/in/mohamed-ibrahim-elhadad',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@mohamed-ibrahim09',
      href: 'https://github.com/mohamed-ibrahim09',
    },
  ]

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-6 animate-[slideInUp_0.6s_ease-out]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Let&apos;s Connect
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Hiring for DevOps or cloud, or have an AWS project that needs a freelancer?
            Send a message below or email me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.label !== 'Email' && method.label !== 'Location' ? '_blank' : undefined}
                      rel={method.label !== 'Email' && method.label !== 'Location' ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-all duration-200 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                        <p className="font-semibold text-foreground break-all">{method.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-lg bg-card border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me more about your project or opportunity..."
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
                  />
                </div>

                {/* Status Message */}
                {submitMessage && (
                  <div
                    role="status"
                    className={`p-4 rounded-lg ${
                      submitType === 'success'
                        ? 'bg-primary/10 text-primary border border-primary/40'
                        : 'bg-destructive/10 text-red-400 border border-red-500/40'
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Terms */}
                <p className="text-xs text-muted-foreground text-center">
                  I respect your privacy. Your information will only be used to respond to your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Prefer a Quick Chat?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Feel free to reach out directly via email or connect on LinkedIn for a quick conversation.
          </p>
          <a
            href="mailto:mohammed.i.elhadad@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  )
}
