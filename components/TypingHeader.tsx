'use client'

import { useEffect, useState } from 'react'

export function TypingHeader() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'elhadad'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className="font-bold tracking-widest">
      {displayText}
      {showCursor && <span className="animate-pulse">_</span>}
    </span>
  )
}
