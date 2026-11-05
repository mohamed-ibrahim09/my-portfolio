'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
const FONT_SIZE = 14
const FPS = 24

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [enabled, setEnabled] = useState(false)

  // Desktop only, and never for people who prefer reduced motion.
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setEnabled(window.innerWidth >= 768 && !motion.matches)
    update()
    window.addEventListener('resize', update)
    motion.addEventListener('change', update)
    return () => {
      window.removeEventListener('resize', update)
      motion.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let columns = 0
    let drops: number[] = []
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      columns = Math.floor(canvas.width / FONT_SIZE)
      drops = Array.from({ length: columns }, () => Math.floor((Math.random() * canvas.height) / FONT_SIZE))
    }
    resize()
    window.addEventListener('resize', resize)

    let raf = 0
    let last = 0
    const draw = (now: number) => {
      raf = requestAnimationFrame(draw)
      if (document.hidden || now - last < 1000 / FPS) return
      last = now

      ctx.fillStyle = 'rgba(9, 9, 11, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`
      ctx.textBaseline = 'bottom'

      for (let i = 0; i < columns; i++) {
        const y = drops[i] * FONT_SIZE
        ctx.fillStyle = Math.random() < 0.04 ? 'rgba(180, 255, 200, 0.9)' : 'rgba(0, 255, 65, 0.55)'
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * FONT_SIZE, y)
        drops[i] = y > canvas.height && Math.random() > 0.975 ? 0 : drops[i] + 1
      }
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.12]"
      style={{ zIndex: 1 }}
    />
  )
}
