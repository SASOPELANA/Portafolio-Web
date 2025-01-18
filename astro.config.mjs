// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel(),
  site: "https://tu-dominio.com", // Cambia esto por tu dominio
});
