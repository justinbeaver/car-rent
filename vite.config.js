import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/1-tools/media-queries" as *;
        @use "@/styles/1-tools/text-preset" as *;`,
      },
    },
  },
});
