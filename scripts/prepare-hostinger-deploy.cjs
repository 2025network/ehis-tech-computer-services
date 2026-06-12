const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const standaloneDir = path.join(root, ".next", "standalone");
const staticSource = path.join(root, ".next", "static");
const staticTarget = path.join(standaloneDir, ".next", "static");
const publicSource = path.join(root, "public");
const publicTarget = path.join(standaloneDir, "public");

const requiredPublicAssets = [
  "ehis-tech-logo.png",
  "icon.png",
  "logo.png",
  "hp-1/1.jpg",
  "hp-1/11.jpg",
  "hp-1/111.jpg",
  "hp-1/1111.jpg",
  "hp-1/11111.jpg",
  "hp-1/111111.jpg",
  "LP-2/2.webp",
  "LP-2/22.webp",
  "LP-2/222.webp",
  "LP-2/2222.webp",
  "LP-2/22222.webp",
  "LP-2/222222.webp",
  "LP-3/3.png",
  "LP-3/33.png",
  "LP-3/333.png",
  "LP-3/3333.png",
  "LP-3/33333.png",
  "LP-3/333333.png",
  "4.webp",
  "5.webp",
  "6.jpg",
  "7.jpg",
];

function copyRequiredDirectory(source, target, label) {
  if (!fs.existsSync(source)) {
    throw new Error(`${label} was not found at ${source}. Run next build before preparing deployment.`);
  }

  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(source, target, { recursive: true });
}

function assertFilesExist(baseDir, files, label) {
  const missing = files.filter((file) => !fs.existsSync(path.join(baseDir, file)));

  if (missing.length > 0) {
    throw new Error(`${label} missing required public assets: ${missing.join(", ")}`);
  }
}

if (!fs.existsSync(standaloneDir)) {
  throw new Error(".next/standalone was not generated. Ensure next.config.ts has output: 'standalone'.");
}

assertFilesExist(publicSource, requiredPublicAssets, "Source public folder");
copyRequiredDirectory(staticSource, staticTarget, "Next static assets");
copyRequiredDirectory(publicSource, publicTarget, "Public assets");
assertFilesExist(publicTarget, requiredPublicAssets, "Standalone public folder");

console.log("Hostinger deployment bundle prepared with .next/static and public assets.");
console.log(`Verified ${requiredPublicAssets.length} public image assets in .next/standalone/public.`);