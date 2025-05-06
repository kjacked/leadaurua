# LeadAura – Next.js Website Setup & Local Image Integration Guide

This README provides a step-by-step guide to set up, customize, and deploy the LeadAura marketing site—including how to integrate Relume UI & Tailwind, manage local images, and get everything building on Vercel.

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Prerequisites](#prerequisites)  
3. [Installation](#installation)  
4. [Relume UI & Tailwind Setup](#relume-ui--tailwind-setup)  
5. [Asset Organization](#asset-organization)  
6. [Bulk-Replace Cloudfront URLs](#bulk-replace-cloudfront-urls)  
7. [Optional: Explicit Imports](#optional-explicit-imports)  
8. [Development](#development)  
9. [Deployment](#deployment)  
10. [Troubleshooting](#troubleshooting)  
11. [Scripts Reference](#scripts-reference)  
12. [Dependencies](#dependencies)  

---

## Project Overview

LeadAura is a marketing website showcasing AI-powered lead management and optimization solutions.  
It includes pages for services, about us, pricing, and more, built with:

- Next.js (React)  
- Tailwind CSS  
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
2. Install core dependencies
npm install # or yarn
3. Install Relume packages
npm install @relume_io/relume-ui @relume_io/relume-tailwind


---

## Relume UI & Tailwind Setup

Update (or create) `tailwind.config.js` at the project root to pull in the Relume preset and scan its classes:
js
// tailwind.config.js
module.exports = {
content: [
"./node_modules/@relume_io/relume-ui/dist//.{js,ts,jsx,tsx}",
"./app//.{js,ts,jsx,tsx,mdx}",
"./src//.{js,ts,jsx,tsx,mdx}"
],
presets: [require("@relume_io/relume-tailwind")],
};

---

## Asset Organization

1. Create a directory for your images:  
   - **Next.js** → `public/images/`  
   - **CRA/Vite** → `src/images/`

2. Copy your wireframe images into that folder, for example:

public/
└── images/
├── relume-icon.svg
├── placeholder-image.svg
├── about-hero.png
├── crm-hero-landscape.png
└── …etc


---

## Bulk-Replace Cloudfront URLs

If your components still reference Cloudfront, run a one-liner to swap them all to `/images/...`.

### macOS / Linux

bash
grep -rl "https://d22po4pjz3o32e.cloudfront.net" src \
| xargs sed -i '' 's|https://d22po4pjz3o32e.cloudfront.net|/images|g'

### Linux (GNU sed)


bash
grep -rl "https://d22po4pjz3o32e.cloudfront.net" src \
| xargs sed -i 's|https://d22po4pjz3o32e.cloudfront.net|/images|g'

All `<img src="https://…">` references will become `<img src="/images/...">`.

---

## Optional: Explicit Imports

If you’d rather let your bundler handle images:

1. Move `/images` → `src/images`.  
2. Create `src/images/index.js`:

    ```js
    export { default as logo }     from "./relume-icon.svg";
    export { default as heroAbout } from "./about-hero.png";
    // …etc
    ```

3. In your component:

    ```jsx
    import { logo, heroAbout } from "src/images";

    <img src={logo}     alt="Logo"        className="size-12" />
    <img src={heroAbout} alt="About hero" className="rounded-image" />
    ```

---

## Development

bash
npm run dev # or yarn dev


Open http://localhost:3000 to preview.

---

## Deployment

### Vercel Configuration

In your Vercel Dashboard for the LeadAura project:

- **Framework Preset**: Next.js  
- **Root Directory**: `/`  
- **Install Command**:
  ```bash
  npm install && npm install @relume_io/relume-ui @relume_io/relume-tailwind
  ```
- **Build Command**:
  ```bash
  npm run build
  ```
- **Output Directory**: `.next`

Once configured, push to GitHub or click **Deploy**. Your site will build with Relume packages and serve all local `/images`.

---

## Troubleshooting

- **Missing `clsx` errors**  
  ```bash
  npm run fix-clsx-imports
  ```
- **Tailwind classes not applying?**  
  - Ensure your `tailwind.config.js` includes the Relume presets & content.  
  - Reinstall `tailwindcss`, `postcss`, and `autoprefixer`.

---

## Scripts Reference

- `scripts/adapt-for-nextjs.js`  
- `scripts/fix-clsx-imports.js`  
- `scripts/fix-navbar-components.js`  
- `scripts/prepare-for-deployment.js`  
- `scripts/update-image-srcs.js`  

---

## Dependencies

- next: ^13.0.0  
- react & react-dom: ^18.2.0  
- tailwindcss: ^3.3.2  
- @relume_io/relume-ui: ^1.3.1  
- @relume_io/relume-tailwind: ^1.3.0  
- clsx: ^2.1.1  
- tailwind-merge: ^3.2.0  
- postcss: ^8.4.24  
- autoprefixer: ^10.4.14  

---

Made with ❤️ by the LeadAura team.  

