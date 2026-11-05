'use client'

import React from 'react'

interface AnimatedListItemProps {
  children: React.ReactNode
  className?: string
  index: number
}

export function AnimatedListItem({
  children,
  className = '',
  index,
}: AnimatedListItemProps) {
  return (
    <div
      className={`fade-in ${className}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {children}
    </div>
  )
}
