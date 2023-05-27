import { defineConfig } from 'astro/config';
import i18n from "astro-i18n";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.avyga.com',
  integrations: [
    i18n(), 
    sitemap(), 
    tailwind(), 
    sanity({
      projectId: '7bqqhdtu',
      dataset: import.meta.env.DEV ? 'developement': 'production',
      apiVersion: '2023-03-01',
      useCdn: false
    }), 
  ]
});