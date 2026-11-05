# Mohamed Elhadad: Matrix Dev Portfolio

Terminal-style portfolio of Mohamed Elhadad, DevOps Engineer at ALGOcas and AWS Certified Solutions Architect – Associate.

**Live site:** https://mohamedelhadad.vercel.app

## What it shows

- **Home:** a terminal intro with a proof row and a live prompt (type `help`), then about and skills, projects, an ALGOcas case study, experience and contact.
- **Command menu:** press Ctrl+K (⌘K on Mac) to jump anywhere or open a link.
- **Projects:** five projects with architecture images and expandable details, each linked to GitHub.
- **CV:** `/cv` is generated from the same data and prints cleanly. Use "Save as PDF".
- **Contact:** form handled by Formspree.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS with a custom Matrix terminal theme, JetBrains Mono
- Lucide icons, Vercel Analytics
- Hosted on Vercel

## Run it locally

Prerequisites: Node.js 20 or later and pnpm 10.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Where to edit content

Almost all content lives in one file: **`lib/data.ts`** (profile, proof stats, skills, projects, experience, certifications, education, languages). The home page, the terminal, the command menu and `/cv` all read from it.

| What | File |
| --- | --- |
| Profile, projects, experience, skills | `lib/data.ts` |
| Terminal intro and commands | `components/Hero.tsx` |
| Ctrl+K command menu | `components/CommandMenu.tsx` |
| ALGOcas case study | `components/CaseStudy.tsx` |
| Project images | `public/projects/` |
| Page title, description, social preview | `app/layout.tsx`, `app/opengraph-image.tsx` |

## Deployment

Vercel deploys the `main` branch to production on every push. Other branches get preview deployments.

## License

All rights reserved. The code is public for viewing. Please ask before reusing it.
