# Buzzvel Frontend Test – Luma landing page

A responsive landing page (desktop, tablet and mobile) built from the Buzzvel FE Test 2026 Figma design, using **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

## How to install, run and build

Requirements: **Node.js 20+** and **Yarn**.

```bash
# install dependencies
yarn install

# run the development server (http://localhost:3000)
yarn dev

# lint
yarn lint

# production build and start
yarn build
yarn start
```

## Project structure

```
app/
  layout.tsx        root layout, fonts and metadata
  page.tsx          the page, composed of the section components
components/
  Header.tsx                 page sections, one file per section
  LearnAtYourOwnPace.tsx
  FindYourNextSkill.tsx
  MostPopularThisMonth.tsx
  HowLumaWorks.tsx
  Testimonial.tsx
  ThePeople.tsx
  Contact.tsx
  WhatWillYouLearnNext.tsx
  Footer.tsx
  Button.tsx                 reusable UI components
  Card.tsx
  Tag.tsx
  Rating.tsx
  Icon.tsx
public/images/      images and decorative shapes exported from the design
```

## Key decisions

- **One component per section.** Each section of the design lives in its own file, and `app/page.tsx` only composes them. This keeps every file small, easy to find and easy to change without touching the rest of the page.
- **Reusable UI components to avoid duplication.** Elements that repeat across sections were extracted into small typed components:
  - `Button` with variants (`primary`, `secondary`, `accent`, `ghost`)
  - `Card`, `Tag` and `Rating`
  - `Icon` for avatars and small images

  Each one accepts a `className` that is merged with `tailwind-merge`, so a section can adjust spacing without creating a new variant.
- **Content as local data.** Lists such as skill cards, steps, stats, contact info and footer links are plain arrays rendered with `map`, so content changes don't require touching the markup.
- **Mobile first with a single breakpoint.** Base classes describe the mobile layout and `lg:` (1024px) switches to the desktop layout. Tablet widths use the stacked mobile layout, which keeps the content readable without a third set of styles.
- **Mobile menu without JavaScript.** The mobile navigation uses a native `<details>`/`<summary>` element. It is keyboard accessible and works without client-side JavaScript.
- **Decorative shapes as separate assets.** The shapes of the "What will you learn next?" section are positioned individually from the design's coordinates and hidden on mobile, as in the mobile design.
- **Steps numbered 01–03.** The desktop design labels all three steps "STEP 01", while the mobile design numbers them 01, 02 and 03. I treated the desktop labels as a mistake and generate the number from the step position on both layouts.
- **Optimized images.** The photos were exported from Figma as SVGs with embedded bitmaps (up to 2 MB each). I converted them to WebP at 2x resolution (about 190 KB in total), so `next/image` can serve responsive sizes. The hero image is preloaded. Logos, icons and decorative shapes stay as SVG.
- **Typography.** Body text uses Inter and headings use Plus Jakarta Sans, both loaded with `next/font` (self-hosted, no layout shift).
- **Semantic HTML.** Each section is a `<section>`, the hero title is the only `<h1>`, section titles are `<h2>` and card/step titles are `<h3>`. Navigation links are real `<a>` elements inside `<nav>`, so they are reachable with the keyboard.
- **Reduced motion.** A global `prefers-reduced-motion` rule disables transitions and animations for users who ask for it.

## Known gaps

- **Contact form:** the form has native validation (required fields, email type) but is not connected to any backend. Submitting it reloads the page.
- **Navigation:** links and buttons don't lead anywhere.

## Time spent

Approximately **8 hours**:
- ~4.5h building the sections and reusable components
- ~1.5h mobile/responsive layout
- ~2h review, accessibility, image optimization and README


## AI tools

I used **Claude Code** (Anthropic) for the more repetitive and simple parts of the work, mainly creating the reusable components (`Button`, `Card`, `Tag`, `Rating`).

I checked the result by:
- reviewing the generated code;
- comparing the page in the browser against the design on desktop and mobile;
- running `yarn lint` and `yarn build` before submitting.
