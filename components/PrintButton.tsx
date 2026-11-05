'use client'

import { Download } from 'lucide-react'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold hover:bg-[#b4ffc8]"
    >
      <Download size={16} aria-hidden />
      Save as PDF
    </button>
  )
}
