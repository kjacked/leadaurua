// scripts/update-image-srcs.js
const fs = require("fs");
const path = require("path");
const { sync: globSync } = require("glob");
const map = require("./image-map.json");

// Create a reverse mapping from component paths to image files
const imageMap = {};
Object.entries(map).forEach(([componentPath, fileName]) => {
  // Extract the section and component name
  const [section, component] = componentPath.split('/');
  
  // Store both the full path and just the component name for flexible matching
  imageMap[componentPath] = fileName;
  imageMap[component] = fileName;
  imageMap[section] = imageMap[section] || fileName; // Use first image for each section
});

// Find all JS/JSX files in the project (not in src/)
const allFiles = globSync("./**/*.{js,jsx}", {
  ignore: ["node_modules/**", ".git/**", "scripts/**"]
});
console.log(`Found ${allFiles.length} total files to scan`);

let totalPatched = 0;
let totalWithCloudfront = 0;
const cloudfrontUrls = new Set();
const patchedFiles = [];

// Process each file
allFiles.forEach(file => {
  try {
    let contents = fs.readFileSync(file, "utf8");
    
    // Check if the file contains a cloudfront URL
    const cloudfrontRegex = /https?:\/\/d22po4pjz3o32e\.cloudfront\.net\/[^"]+/g;
    const matches = contents.match(cloudfrontRegex);
    
    if (matches && matches.length > 0) {
      totalWithCloudfront++;
      matches.forEach(url => cloudfrontUrls.add(url));
      
      // Try to find a matching image for this file
      let imageFile = null;
      
      // Get the component name and section from the file path
      const fileParts = file.split('/');
      const fileName = path.basename(file);
      const fileNameWithoutExt = path.basename(file, path.extname(file));
      const section = fileParts[0]; // First part of path is likely the section
      
      // Try different matching strategies
      if (imageMap[`${section}/${fileName}`]) {
        // Exact match in image map
        imageFile = imageMap[`${section}/${fileName}`];
        console.log(`Found exact match for ${file}`);
      } else if (imageMap[fileNameWithoutExt]) {
        // Match by component name
        imageFile = imageMap[fileNameWithoutExt];
        console.log(`Found component name match for ${file}`);
      } else if (imageMap[section]) {
        // Match by section
        imageFile = imageMap[section];
        console.log(`Found section match for ${file}`);
      } else if (Object.values(imageMap).length > 0) {
        // Fallback: use first image
        imageFile = Object.values(imageMap)[0];
        console.log(`No specific match found for ${file}, using default: ${imageFile}`);
      }
      
      if (imageFile) {
        // Replace all cloudfront URLs with our local image
        const originalContents = contents;
        contents = contents.replace(
          cloudfrontRegex,
          match => {
            console.log(`Replacing ${match} with /images/${imageFile}`);
            return `/images/${imageFile}`;
          }
        );
        
        if (contents !== originalContents) {
          fs.writeFileSync(file, contents, "utf8");
          console.log(`Patched ${file} → /images/${imageFile}`);
          totalPatched++;
          patchedFiles.push(file);
        }
      } else {
        console.warn(`Found cloudfront URLs in ${file} but no matching image file`);
      }
    }
  } catch (error) {
    console.error(`Error processing file ${file}: ${error.message}`);
  }
});

// Print summary
console.log("\n--- Summary ---");
console.log(`Total files scanned: ${allFiles.length}`);
console.log(`Files with cloudfront URLs: ${totalWithCloudfront}`);
console.log(`Files patched: ${totalPatched}`);

if (patchedFiles.length > 0) {
  console.log("\nPatched files:");
  patchedFiles.forEach(file => console.log(`- ${file}`));
}

if (cloudfrontUrls.size > 0) {
  console.log("\nFound these cloudfront URLs:");
  Array.from(cloudfrontUrls).slice(0, 10).forEach(url => {
    console.log(`- ${url}`);
  });
  if (cloudfrontUrls.size > 10) {
    console.log(`... and ${cloudfrontUrls.size - 10} more`);
  }
}

console.log("\nTo improve this process:");
console.log("1. Update your image-map.json to match your actual file structure");
console.log("2. Consider organizing your images by section/page for better matching");