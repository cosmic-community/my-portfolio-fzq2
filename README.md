<!-- METADATA: {"type":"app-build","filesTotal":24} -->
<!-- FRAMEWORK: nextjs -->

# My Portfolio

![App Preview](https://imgix.cosmicjs.com/4d8bed10-680f-11f1-a920-11d2c6e88013-autopilot-photo-1517245386807-bb43f82c33c4-1781455035945.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive developer portfolio built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). Showcase your projects, technical skills, work experience, and contact information—all dynamically powered by your existing Cosmic content model.

## Features

- 🏠 **Stunning Homepage** with hero, featured projects, skills overview, and recent experience
- 💼 **Projects Showcase** with screenshots, tech stack badges, live URLs, and GitHub links
- 🛠️ **Skills Section** grouped by category with animated proficiency bars
- 🏢 **Work Experience Timeline** with company logos, roles, and dates
- 📇 **Profile & Contact** with bio, social links, and resume download
- 📱 **Fully Responsive** design that looks great on all devices
- ⚡ **Server-side rendering** for fast loads and great SEO
- 🎨 **Modern UI** with smooth animations and dark, elegant aesthetics

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a2ed857df7d41f21d09ff18&clone_repository=6a2ed97cdf7d41f21d09ff53)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Portfolio". The content is managed in Cosmic CMS with the following object types: projects, skills, work-experience, profile. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com) — see the [Cosmic docs](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with a bucket containing the `projects`, `skills`, `work-experience`, and `profile` object types

### Installation

```bash
bun install
```

Create a `.env.local` file with your Cosmic credentials:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all projects with nested object data
const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single profile
const { object: profile } = await cosmic.objects
  .findOne({ type: 'profile' })
  .depth(1)
```

## Cosmic CMS Integration

This app leverages four object types from your Cosmic bucket:

- **projects** — name, short description, description, screenshots, tech stack, live URL, GitHub URL, featured flag
- **skills** — name, category, proficiency, proficiency percentage, color
- **work-experience** — company, role, description, location, start/end dates, current flag, company logo
- **profile** — full name, headline, bio, profile photo, email, location, social links, resume

All data is fetched server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs) with the `depth` parameter to resolve connected objects.

## Deployment Options

### Vercel

1. Push your code to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add the `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` environment variables
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the repo in [Netlify](https://netlify.com)
3. Add the environment variables
4. Deploy

<!-- README_END -->