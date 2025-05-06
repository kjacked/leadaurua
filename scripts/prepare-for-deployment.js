const fs = require("fs");
const path = require("path");

// Create necessary files for GitHub and Vercel
console.log("Preparing project for GitHub and Vercel deployment...");

// Create a .gitignore file
const gitignoreContent = `
# Dependencies
node_modules
.pnp
.pnp.js

# Testing
coverage

# Production
build
dist
out

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`;

// Create a basic package.json if it doesn't exist
const packageJsonContent = {
  "name": "leadaura",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^13.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "eslint-config-next": "^13.0.0"
  }
};

// Create a basic next.config.js
const nextConfigContent = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['d22po4pjz3o32e.cloudfront.net'],
  },
}

module.exports = nextConfig
`;

// Create a basic README.md
const readmeContent = `
# LeadAura

A modern web application for lead management and optimization.

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
`;

// Create a basic vercel.json
const vercelJsonContent = {
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/images/(.*)",
      "dest": "/images/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
};

// Write files
try {
  if (!fs.existsSync('.gitignore')) {
    fs.writeFileSync('.gitignore', gitignoreContent.trim());
    console.log("Created .gitignore");
  }

  if (!fs.existsSync('package.json')) {
    fs.writeFileSync('package.json', JSON.stringify(packageJsonContent, null, 2));
    console.log("Created package.json");
  }

  if (!fs.existsSync('next.config.js')) {
    fs.writeFileSync('next.config.js', nextConfigContent.trim());
    console.log("Created next.config.js");
  }

  if (!fs.existsSync('README.md')) {
    fs.writeFileSync('README.md', readmeContent.trim());
    console.log("Created README.md");
  }

  if (!fs.existsSync('vercel.json')) {
    fs.writeFileSync('vercel.json', JSON.stringify(vercelJsonContent, null, 2));
    console.log("Created vercel.json");
  }

  // Create pages directory structure for Next.js if it doesn't exist
  if (!fs.existsSync('pages')) {
    fs.mkdirSync('pages');
    console.log("Created pages directory");
    
    // Create a basic index.js in pages
    const indexContent = `
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to home page
    router.push('/home');
  }, []);
  
  return <div>Redirecting...</div>;
}
`;
    fs.writeFileSync('pages/index.js', indexContent.trim());
    console.log("Created pages/index.js");
    
    // Create a basic _app.js in pages
    const appContent = `
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
`;
    fs.writeFileSync('pages/_app.js', appContent.trim());
    console.log("Created pages/_app.js");
  }
  
  // Create styles directory if it doesn't exist
  if (!fs.existsSync('styles')) {
    fs.mkdirSync('styles');
    console.log("Created styles directory");
    
    // Create a basic globals.css
    const globalsContent = `
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
    fs.writeFileSync('styles/globals.css', globalsContent.trim());
    console.log("Created styles/globals.css");
  }

  console.log("\nProject prepared for GitHub and Vercel deployment!");
  console.log("\nNext steps:");
  console.log("1. Initialize Git repository: git init");
  console.log("2. Add files: git add .");
  console.log("3. Commit: git commit -m 'Initial commit'");
  console.log("4. Create GitHub repository and push");
  console.log("5. Import project in Vercel dashboard");
  
} catch (error) {
  console.error("Error preparing project:", error.message);
} 