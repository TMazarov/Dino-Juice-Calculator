// generate-pwa-icons.js
// This script generates PWA icons from logo.png using sharp.

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// List of required icon sizes for PWA
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Ensure output directory exists
const outputDir = path.join(__dirname, "public");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const input = path.join(__dirname, "logo.png");

iconSizes.forEach((size) => {
  sharp(input)
    .resize(size, size)
    .toFile(path.join(outputDir, `pwa-${size}x${size}.png`), (err) => {
      if (err) {
        console.error(`Error generating icon ${size}x${size}:`, err);
      } else {
        console.log(`Generated pwa-${size}x${size}.png`);
      }
    });
});
