// generate-favicons.js
// This script generates favicons from logo.png using sharp.

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "public");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const input = path.join(__dirname, "logo.png");

// Generate favicon.ico (multiple sizes in one file)
sharp(input)
  .resize(48, 48)
  .toFile(path.join(outputDir, "favicon.ico"), (err) => {
    if (err) {
      console.error("Error generating favicon.ico:", err);
    } else {
      console.log("Generated favicon.ico");
    }
  });

// Generate favicon-16x16.png and favicon-32x32.png
[16, 32].forEach((size) => {
  sharp(input)
    .resize(size, size)
    .toFile(path.join(outputDir, `favicon-${size}x${size}.png`), (err) => {
      if (err) {
        console.error(`Error generating favicon-${size}x${size}.png:`, err);
      } else {
        console.log(`Generated favicon-${size}x${size}.png`);
      }
    });
});
