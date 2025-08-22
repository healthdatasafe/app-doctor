import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-expect-error No TS type for import
import backloop from "vite-plugin-backloop.dev";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), backloop("mycomputer")],
  build: {
    outDir: "dist",
  },
  base: "/",
});
