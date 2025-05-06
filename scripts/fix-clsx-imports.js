const fs = require('fs');
const path = require('path');
const { sync: globSync } = require('glob');

// Find all JS/JSX files that might use clsx
const files = globSync('src/**/*.{js,jsx}');

// Create the utils directory and classNames.js file if they don't exist
const utilsDir = 'src/utils';
if (!fs.existsSync(utilsDir)) {
  fs.mkdirSync(utilsDir, { recursive: true });
  console.log('Created utils directory');
}

// Create the classNames utility file
const classNamesContent = `/**
 * A simple utility function to conditionally join class names together
 * This replaces the need for the clsx library
 * 
 * @param {...any} classes - Class names or objects where keys are class names and values are booleans
 * @returns {string} - Joined class names
 */
export function classNames(...classes) {
  return classes
    .filter(Boolean)
    .map(cls => {
      if (typeof cls === 'object') {
        return Object.entries(cls)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return cls;
    })
    .join(' ');
}

// For backward compatibility with components using clsx
export const clsx = classNames;
`;

fs.writeFileSync(path.join(utilsDir, 'classNames.js'), classNamesContent);
console.log('Created classNames utility file');

// Process each file to add the import if clsx is used
let filesUpdated = 0;

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if the file uses clsx but doesn't import it
    if (content.includes('clsx(') && !content.includes("import { clsx }") && !content.includes("import clsx")) {
      // Calculate the relative path to the utils directory
      const relativePath = path.relative(path.dirname(file), 'src/utils').replace(/\\/g, '/');
      const importPath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
      
      // Add the import statement at the top of the file
      const updatedContent = `import { clsx } from "${importPath}/classNames";\n\n${content}`;
      
      fs.writeFileSync(file, updatedContent);
      console.log(`Updated ${file} with clsx import`);
      filesUpdated++;
    }
  } catch (error) {
    console.error(`Error processing ${file}: ${error.message}`);
  }
});

console.log(`\nFixed clsx imports in ${filesUpdated} files`);
console.log('\nNext steps:');
console.log('1. Run "npm run dev" to start the development server');
console.log('2. Check if the clsx error is resolved'); 