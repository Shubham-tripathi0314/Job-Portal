import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Get the current directory path for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
