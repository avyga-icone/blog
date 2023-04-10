import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import i18n from "astro-i18n";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(), 
    i18n(), 
    sitemap(), 
    tailwind(), 
    alpinejs(),
    sanity({
      projectId: '7bqqhdtu',
      dataset: 'developement',
      apiVersion: '2023-03-01',
      useCdn: false
    }), 
  ]
});