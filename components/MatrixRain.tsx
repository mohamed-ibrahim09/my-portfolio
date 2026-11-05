'use client'

import { useEffect, useRef, useState } from 'react'

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const updateEnabled = () => {
      setEnabled(window.innerWidth >= 768)
    }

    updateEnabled()
    window.addEventListener('resize', updateEnabled)
    return () => window.removeEventListener('resize', updateEnabled)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix characters - mix of hex and binary
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Create array of drop positions
    const drops: number[] = Array(columns).fill(0)

    // Color gradient for Matrix effect
    const colors = [
      'rgba(63, 185, 80, 0.1)',   // Very dim green
      'rgba(63, 185, 80, 0.2)',
      'rgba(63, 185, 80, 0.3)',
      'rgba(63, 185, 80, 0.5)',
      'rgba(63, 185, 80, 0.8)',
      '#3fb950',                   // Bright green for head
    ]

    let frameCount = 0
    const frameRate = 30 // 30 fps for smooth but not too fast animation

    const draw = () => {
      // Control frame rate
      if (frameCount % (60 / frameRate) !== 0) {
        frameCount++
        requestAnimationFrame(draw)
        return
      }

      // Fade effect
      ctx.fillStyle = 'rgba(13, 17, 23, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw characters
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`
      ctx.textBaseline = 'bottom'

      for (let i = 0; i < columns; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)]

        // Get position
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Color based on position - gradient effect
        const colorIndex = Math.floor((Math.sin(frameCount * 0.01 + i) * 0.5 + 0.5) * colors.length)
        ctx.fillStyle = colors[colorIndex] || colors[colors.length - 1]

        // Draw character
        ctx.fillText(char, x, y)

        // Reset drop randomly
        if (y > canvas.height || Math.random() < 0.01) {
          drops[i] = 0
        } else {
          drops[i]++
        }
      }

      frameCount++
      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20"
      style={{ zIndex: 1 }}
    />
  )
}
