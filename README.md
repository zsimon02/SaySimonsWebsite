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

Create a local `.env.local` with:

```bash
SUPABASE_URL=your-project-url
SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

In Vercel, add the same variable names in Project Settings -> Environment Variables. The app only reads `process.env`, so Vercel replaces local `.env.local` automatically at deploy/runtime.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Waitlist Flow

The waitlist uses `POST /api/waitlist` with shared Zod validation in [`lib/waitlist.ts`](/c:/Users/Zachary%20Simon/saysimons-website/lib/waitlist.ts). Submissions are written server-side to Supabase through a server client in [`lib/supabase-admin.ts`](/c:/Users/Zachary%20Simon/saysimons-website/lib/supabase-admin.ts) configured with your publishable key, so inserts depend on your table's RLS policy.

Create this table in Supabase before using the form:

```sql
create extension if not exists pgcrypto;

create table if not exists public.waitlist_entries (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null unique,
  status text not null default 'pending',
  source text not null default 'website',
  source_detail text,
  consent_version text,
  joined_at timestamptz not null default now()
);

alter table public.waitlist_entries enable row level security;

drop policy if exists "Allow public waitlist signups" on public.waitlist_entries;

create policy "Allow public waitlist signups"
on public.waitlist_entries
for insert
to anon
with check (
  source = 'website'
);
```

If you already created the earlier version of the table, run this instead:

```sql
alter table public.waitlist_entries
  add column if not exists status text not null default 'pending',
  add column if not exists source_detail text,
  add column if not exists consent_version text;

alter table public.waitlist_entries enable row level security;

drop policy if exists "Allow public waitlist signups" on public.waitlist_entries;

create policy "Allow public waitlist signups"
on public.waitlist_entries
for insert
to anon
with check (
  source = 'website'
);
```

The app currently logs `source_detail` as `/join` and writes a single server-side consent version so legal copy updates stay centralized. Duplicate emails are handled by the unique constraint and return the same friendly "already on the waitlist" response as before. RLS should stay enabled on this table; inserts only work when the `anon` role is allowed by policy.
