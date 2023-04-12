import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import webfontDownload from "vite-plugin-webfont-dl";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800&display=swap",
    ]),
  ],
});
