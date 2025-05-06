const fs = require('fs');
const path = require('path');
const { sync: globSync } = require('glob');

// Create pages directory if it doesn't exist
if (!fs.existsSync('pages')) {
  fs.mkdirSync('pages', { recursive: true });
  console.log('Created pages directory');
}

// Create a basic _app.js file
const appContent = `
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
`;

fs.writeFileSync('pages/_app.js', appContent.trim());
console.log('Created pages/_app.js');

// Find all index.jsx files in src directory
const indexFiles = globSync('src/**/index.jsx');
console.log(`Found ${indexFiles.length} index files to process`);

// Process each index file
indexFiles.forEach(file => {
  try {
    const dirName = path.dirname(file).replace('src/', '');
    const contents = fs.readFileSync(file, 'utf8');
    
    // Create corresponding page file
    const pageDir = `pages/${dirName}`;
    
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    // Update imports to be relative to the new location
    let updatedContents = contents.replace(
      /from "\.\/components\//g,
      `from "../../src/${dirName}/components/`
    );
    
    fs.writeFileSync(`${pageDir}/index.js`, updatedContents);
    console.log(`Created ${pageDir}/index.js`);
  } catch (error) {
    console.error(`Error processing ${file}: ${error.message}`);
  }
});

// Create a root index.js that redirects to home
const rootIndexContent = `
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

fs.writeFileSync('pages/index.js', rootIndexContent.trim());
console.log('Created pages/index.js');

console.log('\nProject structure adapted for Next.js!');
console.log('\nNext steps:');
console.log('1. Run "npm install" to install dependencies');
console.log('2. Run "npm run dev" to start the development server');
console.log('3. Open http://localhost:3000 in your browser'); 