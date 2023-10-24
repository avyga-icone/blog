import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
// import react from "@astrojs/react";

// const isDev = import.meta.env.DEV;
// https://astro.build/config
export default defineConfig({
  // output: "hybrid",
  site: 'https://blog.avyga.com',
  integrations: [ 
    // sitemap(), 
    tailwind(), 
    sanity({
      projectId: '7bqqhdtu',
      dataset: 'developement',
      useCdn: false,
    }), 
    // react(),
  ]
});