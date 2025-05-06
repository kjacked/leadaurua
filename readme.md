# LeadAura – Next.js Website Setup & Local Image Integration Guide

This README provides a step-by-step guide to set up, customize, and deploy the LeadAura marketing site, including instructions for local image management.

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Prerequisites](#prerequisites)  
3. [Installation](#installation)  
4. [Asset Organization](#asset-organization)  
5. [Bulk-Replace Cloudfront URLs](#bulk-replace-cloudfront-urls)  
6. [Optional: Explicit Imports](#optional-explicit-imports)  
7. [Development](#development)  
8. [Deployment](#deployment)  
9. [Troubleshooting](#troubleshooting)  
10. [Scripts Reference](#scripts-reference)  
11. [Dependencies](#dependencies)  

---

## Project Overview

LeadAura is a marketing website showcasing AI-powered lead management and optimization solutions.  
It includes multiple pages for services, about us, pricing, and more, built with:

- Next.js (React framework)  
- Tailwind CSS (utility-first styling)  
- Relume UI components  

---

## Prerequisites

- Node.js v14 or later  
- npm or yarn  
- Git  

---

## Installation
bash
1. Clone the repository
git clone https://github.com/your-org/leadaura.git
cd leadaura
2. Install dependencies
npm install # or yarn

---

## Asset Organization

1. Create a folder for your images:
   - If you’re using **Next.js**, put them under `public/images/`
   - If you’re using **CRA/Vite** (Webpack/Vite), put them under `src/images/`

2. Copy all of your wireframe images into that folder, e.g.:

   ```
   public/
   └── images/
       ├── relume-icon.svg
       ├── placeholder-image.svg
       ├── placeholder-image-landscape.svg
       ├── about-hero.png
       ├── crm-hero-landscape.png
       └── …etc
   ```

---

## Bulk-Replace Cloudfront URLs

If your components still reference `https://d22po4pjz3o32e.cloudfront.net/...`, run a one-liner to swap them all to local `/images/...`.

### macOS / Linux
bash
grep -rl "https://d22po4pjz3o32e.cloudfront.net" src \
| xargs sed -i '' 's|https://d22po4pjz3o32e.cloudfront.net|/images|g'

### Linux (GNU `sed`)
bash
grep -rl "https://d22po4pjz3o32e.cloudfront.net" src \
| xargs sed -i 's|https://d22po4pjz3o32e.cloudfront.net|/images|g'

All `<img src="https://…">` references become `<img src="/images/...">`.

---

## Optional: Explicit Imports

If you prefer bundler-handled imports, move `images/` → `src/images/` and then:
js
// src/images/index.js
export { default as logo } from "./relume-icon.svg";
export { default as heroAbout } from "./about-hero.png";
// …etc
jsx
// any component
import { logo, heroAbout } from "src/images";
<img src={logo} alt="Logo" className="size-12" />
<img src={heroAbout} alt="About hero" className="rounded-image" />

---

## Development

bash
npm run dev # or yarn dev

Open your browser at [http://localhost:3000](http://localhost:3000).

---

## Deployment

### Vercel

1. Push your code to GitHub.  
2. Import the project in Vercel and connect your GitHub repo.  
3. Verify Environment Variables (if any) and click **Deploy**.  

---

## Troubleshooting

### Missing `clsx` errors

bash
npm run fix-clsx-imports


### Tailwind not applying

- Verify `tailwind.config.js` is correctly configured.  
- Ensure you have latest `tailwindcss`, `postcss`, and `autoprefixer` installed.

---

## Scripts Reference

- `scripts/adapt-for-nextjs.js`  
- `scripts/fix-clsx-imports.js`  
- `scripts/fix-navbar-components.js`  
- `scripts/prepare-for-deployment.js`  
- `scripts/update-image-srcs.js`  

Use these to automate common codebase transformations.

---

## Dependencies

- next: ^13.0.0  
- react & react-dom: ^18.2.0  
- tailwindcss: ^3.3.2  
- @relume_io/relume-tailwind: ^1.3.0  
- @relume_io/relume-ui: ^1.3.1  
- clsx: ^2.1.1  
- tailwind-merge: ^3.2.0  
- postcss: ^8.4.24  
- autoprefixer: ^10.4.14  

---

This project was created with ❤️ by the LeadAura team.  