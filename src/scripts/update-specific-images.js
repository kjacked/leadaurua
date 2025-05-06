const fs = require("fs");
const path = require("path");

// Define the mappings with relative paths
const imageMappings = [
  {
    image: "images/LauraAI.png",
    component: "about-us/components/Navbar3.jsx",
    context: "logo"
  },
  {
    image: "images/manual_management_20250505_190746.png",
    component: "home/components/Header15.jsx"
  },
  {
    image: "images/the_solution_20250505_190919.png",
    component: "home/components/Layout239.jsx"
  }
  // Add more mappings as needed
];

// Track results
let totalPatched = 0;
const patchedFiles = [];
const errors = [];

// Process each mapping
imageMappings.forEach(mapping => {
  try {
    const componentPath = mapping.component;
    const imagePath = mapping.image;
    const imageFileName = path.basename(imagePath);
    
    console.log(`\nProcessing: ${componentPath} → ${imageFileName}`);
    
    // Check if component file exists
    if (!fs.existsSync(componentPath)) {
      throw new Error(`Component file not found: ${componentPath}`);
    }
    
    // Check if image file exists
    if (!fs.existsSync(imagePath)) {
      throw new Error(`Image file not found: ${imagePath}`);
    }
    
    // Read the component file
    let contents = fs.readFileSync(componentPath, "utf8");
    const originalContents = contents;
    
    // Check if the file contains any cloudfront URLs
    const cloudfrontRegex = /https?:\/\/d22po4pjz3o32e\.cloudfront\.net\/[^"]+/g;
    const matches = contents.match(cloudfrontRegex);
    
    if (matches && matches.length > 0) {
      console.log(`Found ${matches.length} cloudfront URLs in ${componentPath}:`);
      matches.forEach(url => console.log(`- ${url}`));
      
      // Replace cloudfront URLs with the specific image
      contents = contents.replace(
        /src="https?:\/\/d22po4pjz3o32e\.cloudfront\.net\/[^"]+"/g,
        `src="/${imagePath}"`
      );
    } else {
      console.log(`No cloudfront URLs found in ${componentPath}`);
      
      // Check if there are already image references that we might want to update
      const existingImageRegex = /src="\/images\/[^"]+"/g;
      const existingImages = contents.match(existingImageRegex);
      
      if (existingImages && existingImages.length > 0) {
        console.log(`Found ${existingImages.length} existing image references:`);
        existingImages.forEach(img => console.log(`- ${img}`));
        
        // Option to replace existing image references
        contents = contents.replace(
          existingImageRegex,
          `src="/${imagePath}"`
        );
        console.log(`Replaced existing image references with /${imagePath}`);
      }
    }
    
    // Special handling for logo context
    if (mapping.context === "logo") {
      console.log(`Applying logo-specific replacement for ${componentPath}`);
      
      // Look for logo-related elements
      if (contents.includes('className="navbar-logo"') || 
          contents.includes('className="footer-logo"')) {
        
        // Find the img tag within logo elements
        const logoRegex = /<img[^>]*className="(navbar-logo|footer-logo)"[^>]*>/g;
        contents = contents.replace(logoRegex, match => {
          return match.replace(/src="[^"]*"/, `src="/${imagePath}"`);
        });
        
        console.log(`Applied logo-specific replacement`);
      }
    }
    
    // Write the updated content back to the file
    if (contents !== originalContents) {
      fs.writeFileSync(componentPath, contents, "utf8");
      console.log(`Patched ${componentPath} → /${imagePath}`);
      totalPatched++;
      patchedFiles.push(componentPath);
    } else {
      console.log(`No changes made to ${componentPath}`);
      
      // Show a snippet of the file for debugging
      console.log(`File snippet (first 200 chars):`);
      console.log(contents.substring(0, 200) + "...");
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    errors.push(error.message);
  }
});

// Print summary
console.log("\n--- Summary ---");
console.log(`Total files patched: ${totalPatched}`);

if (patchedFiles.length > 0) {
  console.log("\nPatched files:");
  patchedFiles.forEach(file => console.log(`- ${file}`));
}

if (errors.length > 0) {
  console.log("\nErrors:");
  errors.forEach(error => console.log(`- ${error}`));
} 