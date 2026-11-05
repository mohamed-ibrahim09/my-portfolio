# Mohamed Elhadad: Portfolio

Personal portfolio of Mohamed Elhadad, DevOps Engineer at ALGOcas and AWS Certified Solutions Architect – Associate.

**Live site:** https://mohamedelhadad.vercel.app

## What it shows

- Experience: ALGOcas, DEPI, and NTI (Linux and CCNA) roles.
- Projects: AI deepfake detection, an AIOps incident copilot, an agentic travel assistant, backup and disaster recovery on AWS, and a cloud infrastructure dashboard.
- Skills, certifications, services, and a contact form.
- Light and dark themes, with a downloadable CV.

## Stack

- Next.js 15 (App Router) and React 19
- TypeScript
- Tailwind CSS
- Hosted on Vercel
- Contact form handled by Formspree

## Run it locally

Prerequisites: Node.js 20 or later.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:4028.

To check a production build:

```bash
npm run build
npm run serve
```

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_URL` | Formspree endpoint for the contact form. See `.env.example`. |

Set it in Vercel under Project → Settings → Environment Variables.

## Project layout

- `src/app/portfolio/page.tsx`: page content (projects, experience, skills and certifications are plain data arrays at the top).
- `src/app/layout.tsx`: page metadata and Open Graph settings.
- `public/`: CV, profile photo and social preview image.

## Deployment

Vercel deploys the `main` branch to production on every push.

## License

All rights reserved. The code is public for viewing. Please ask before reusing it.
