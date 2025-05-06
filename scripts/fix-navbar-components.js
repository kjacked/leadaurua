const fs = require('fs');
const path = require('path');
const { sync: globSync } = require('glob');

// Find all Navbar3.jsx files
const navbarFiles = globSync('src/**/Navbar3.jsx');
console.log(`Found ${navbarFiles.length} Navbar3.jsx files to process`);

// Process each file
let filesUpdated = 0;

navbarFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if the file already has the clsx import
    if (!content.includes("import { clsx }") && !content.includes("import clsx")) {
      // Add the import statement after the existing imports
      const updatedContent = content.replace(
        /import React.+?;\n/s,
        match => `${match}import { clsx } from "../../utils/classNames";\n\n`
      );
      
      fs.writeFileSync(file, updatedContent);
      console.log(`Updated ${file} with clsx import`);
      filesUpdated++;
    }
  } catch (error) {
    console.error(`Error processing ${file}: ${error.message}`);
  }
});

console.log(`\nFixed clsx imports in ${filesUpdated} Navbar3.jsx files`); 