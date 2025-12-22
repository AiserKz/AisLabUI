import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
