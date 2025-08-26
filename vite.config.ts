import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import backloop from "vite-plugin-backloop.dev";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), backloop("mycomputer", 5554)],
  build: {
    outDir: "dist",
  },
  base: "/",
});
