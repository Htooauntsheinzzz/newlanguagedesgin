# JLite Frontend (Next.js + TypeScript + Tailwind)

A modern documentation-style frontend for the **JLite Programming Language** project.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Project Structure

```text
.
├── app
│   ├── about/page.tsx
│   ├── code-examples/page.tsx
│   ├── compiler-flow/page.tsx
│   ├── documentation/page.tsx
│   ├── features/page.tsx
│   ├── grammar/page.tsx
│   ├── project-info/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── code-block.tsx
│   ├── compiler-stage-card.tsx
│   ├── example-card.tsx
│   ├── feature-card.tsx
│   ├── footer.tsx
│   ├── navbar.tsx
│   ├── page-shell.tsx
│   ├── section-title.tsx
│   └── summary-card.tsx
├── data
│   └── jlite.ts
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── next.config.ts
```
