const { spawnSync } = require("node:child_process");

const setupScripts = [
  "ensure-blog-table.cjs",
  "ensure-application-purpose-field.cjs",
  "ensure-inventory-tables.cjs",
];

for (const script of setupScripts) {
  const result = spawnSync(process.execPath, ["scripts/" + script], { stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status || 1);
}
