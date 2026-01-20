// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: "https://portafolio.dev",
  adapter: vercel(),
  vite: {
    plugins: [tailwind()],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pt-br"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
