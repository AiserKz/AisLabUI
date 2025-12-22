#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = process.cwd();


const args = process.argv.slice(2);
const componentType = args[0];
const force = args.includes("--force");


if (!componentType || !["native", "motion"].includes(componentType)) {
    console.log("Usage:");
    // console.log("  npx aislab-ui-kit <component-name>");
    console.log("  npx aislab-ui native [--force]");
    console.log("  npx aislab-ui motion [--force]");
    process.exit(0);
}

const dependencies = {
    native: ["tailwindcss", "daisyui"],
    motion: ["tailwindcss", "daisyui", "framer-motion"]
}

function hasPackage(name) {
    try {
        const pkg = JSON.parse(fs.readFileSync(path.join(projectRoot, "package.json"), "utf-8"));
        return pkg.dependencies?.[name] || pkg.devDependencies?.[name];
    } catch {
        return false;
    }
}

if (!force) {
    const missing = dependencies[componentType].filter(dep => !hasPackage(dep));
    if (missing.length > 0) {
        console.warn("🟡 Warning: The following dependencies are missing:")
        missing.forEach(dep => console.warn(`  -${dep}`));
        console.log("Run 'npm install <package>' to install them or use --force to ignore.");
        process.exit(1);
    }
}

// Copy To files
const map = {
    native: "nativeUi",
    motion: "uiMotion",
};

const template = map[componentType];
const src = path.join(__dirname, "../templates", template);
const dest = path.join(projectRoot, "src/components/ui", template);

if (!template) {
    console.error(`Unknown option: ${componentType}`);
    process.exit(1);
}

if (fs.existsSync(dest) && !force) {
    console.log("❌ Folder already exists:", dest);
    process.exit(1);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.cpSync(src, dest, { recursive: true });

console.log(`✅ ${template} added to src/components/ui/${template}`);
if (force) console.log("🟡 Forced copy, dependencies were not checked.");