'use client'

import React from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  staggerChildren?: boolean
  delay?: number
}

export function AnimatedSection({
  children,
  className = '',
  staggerChildren = false,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <section
      className={`fade-in ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {staggerChildren ? (
        <div style={{ animationDelay: `${delay}s` }}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
