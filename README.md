# SaySimons Website

Production-ready marketing site for the SaySimons dating app brand, built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn-style UI components.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Radix UI primitives with shadcn-style component structure
- Zod validation for the waitlist flow

## Routes

- `/`
- `/mission`
- `/product`
- `/founders`
- `/join`
- `/contact`
- `/faq`
- `/privacy`
- `/terms`

## Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Waitlist Flow

The waitlist uses `POST /api/waitlist` with shared Zod validation in [`lib/waitlist.ts`](/c:/Users/Zachary%20Simon/saysimons-website/lib/waitlist.ts). For now, submissions are written to a local JSON file at `data/waitlist-submissions.json` so the flow is real during development and easy to replace with Supabase later.
