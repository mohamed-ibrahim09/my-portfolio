'use client'

import { useEffect, useState } from 'react'

export function Footer() {
  const [year, setYear] = useState(2026)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-background mt-16 pt-8 pb-4 fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-sm font-mono fade-in">
          <p className="cli-command">$ exit</p>
          <p className="cli-output" style={{ animationDelay: '0.2s' }}>
            © Mohamed Elhadad {year}
          </p>
        </div>
      </div>
    </footer>
  )
}
