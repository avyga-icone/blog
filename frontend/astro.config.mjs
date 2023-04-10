import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";
import i18n from "astro-i18n"

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(), 
    i18n(),
    sitemap(), svelte(), tailwind(),
    sanity({
      projectId: '7bqqhdtu',
      dataset: 'developement',
      apiVersion: '2023-03-01',
      useCdn: false,
    })
  ]
});