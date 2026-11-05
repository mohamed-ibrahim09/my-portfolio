'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { profile, projects } from '@/lib/data'

export const OPEN_COMMAND_MENU = 'open-command-menu'

export function openCommandMenu() {
  window.dispatchEvent(new Event(OPEN_COMMAND_MENU))
}

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener(OPEN_COMMAND_MENU, onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener(OPEN_COMMAND_MENU, onOpen)
    }
  }, [])

  const go = (hash: string) => {
    setOpen(false)
    router.push(`/#${hash}`)
  }
  const visit = (url: string) => {
    setOpen(false)
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Command menu"
      description="Jump to a section or open a link"
      className="border border-primary/40 bg-background font-mono rounded-none"
    >
      <CommandInput placeholder="type a command or search…" />
      <CommandList>
        <CommandEmpty>command not found</CommandEmpty>
        <CommandGroup heading="navigate">
          <CommandItem onSelect={() => go('hero')}>cd ~</CommandItem>
          <CommandItem onSelect={() => go('about')}>cat about.txt</CommandItem>
          <CommandItem onSelect={() => go('projects')}>ls projects/</CommandItem>
          <CommandItem onSelect={() => go('case-study')}>cat case-study.md</CommandItem>
          <CommandItem onSelect={() => go('experience')}>cat experience.log</CommandItem>
          <CommandItem onSelect={() => go('contact')}>./contact.sh</CommandItem>
          <CommandItem onSelect={() => { setOpen(false); router.push('/cv') }}>
            open cv
            <CommandShortcut>/cv</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="projects">
          {projects.map((p) => (
            <CommandItem key={p.slug} onSelect={() => visit(p.github)}>
              git clone {p.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="connect">
          <CommandItem onSelect={copyEmail}>
            {copied ? 'copied ✓' : 'copy email'}
            <CommandShortcut>{profile.email}</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => visit(profile.links.github)}>open github</CommandItem>
          <CommandItem onSelect={() => visit(profile.links.linkedin)}>open linkedin</CommandItem>
          <CommandItem onSelect={() => visit(profile.links.writing)}>read my writing (Arabic)</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
