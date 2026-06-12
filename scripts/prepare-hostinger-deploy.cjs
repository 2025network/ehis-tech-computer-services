const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const standaloneDir = path.join(root, ".next", "standalone");
const staticSource = path.join(root, ".next", "static");
const staticTarget = path.join(standaloneDir, ".next", "static");
const publicSource = path.join(root, "public");
const publicTarget = path.join(standaloneDir, "public");

function copyRequiredDirectory(source, target, label) {
  if (!fs.existsSync(source)) {
    throw new Error(`${label} was not found at ${source}. Run next build before preparing deployment.`);
  }

  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(source, target, { recursive: true });
}

if (!fs.existsSync(standaloneDir)) {
  throw new Error(".next/standalone was not generated. Ensure next.config.ts has output: 'standalone'.");
}

copyRequiredDirectory(staticSource, staticTarget, "Next static assets");
copyRequiredDirectory(publicSource, publicTarget, "Public assets");

console.log("Hostinger deployment bundle prepared with .next/static and public assets.");
