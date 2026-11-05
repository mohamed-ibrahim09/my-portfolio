# Mohamed Elhadad: Matrix Dev Portfolio

Terminal-style portfolio of Mohamed Elhadad, DevOps Engineer at ALGOcas and AWS Certified Solutions Architect – Associate.

**Live site:** https://mohamedelhadad.vercel.app

## What it shows

- **Home:** typing terminal intro, about, skills, projects, experience and contact on one page.
- **Projects:** AIOps Incident Copilot, AWS Agentic Travel Assistant, AWS Backup & Disaster Recovery, AWS Cloud Infrastructure Dashboard and AI deepfake detection. Each links to its GitHub repository.
- **Experience:** ALGOcas, DEPI, NTI (Linux and CCNA) and GCI World, plus certifications and a timeline.
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

| What | File |
| --- | --- |
| Terminal intro | `components/Hero.tsx` |
| Home about, stats and skills | `app/page.tsx` |
| Projects | `app/projects/page.tsx` |
| Experience, certifications, timeline | `app/experience/page.tsx` |
| Contact details and form | `app/contact/page.tsx` |
| Page title, description, social preview | `app/layout.tsx`, `app/opengraph-image.tsx` |

## Deployment

Vercel deploys the `main` branch to production on every push. Other branches get preview deployments.

## License

All rights reserved. The code is public for viewing. Please ask before reusing it.
