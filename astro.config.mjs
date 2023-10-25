import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// const isDev = import.meta.env.DEV;
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: 'https://blog.avyga.com',
  integrations: [
  // sitemap(), 
    tailwind(), 
    sanity({
      projectId: '7bqqhdtu',
      dataset: import.meta.env.DEV ? 'developement' : 'production',
      useCdn: false,
      studioBasePath: "/admin"
    }),
    react(),
  ],
  adapter: netlify()
});