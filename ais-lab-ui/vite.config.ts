import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { copyFileSync } from "fs";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "copy-redirects",
      closeBundle() {
        copyFileSync("_redirects", "dist/_redirects");
      },
    },
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@motion": path.resolve(__dirname, "src/components/uiMotion"),
      "@components": path.resolve(__dirname, "src/components"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});
