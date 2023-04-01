import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(), 
    sitemap(), svelte(), tailwind(),
    // sanity({
    //   projectId: 'YOUR_PROJECT_ID',
    //   dataset: 'YOUR_DATASET_NAME',
    //   apiVersion: '2023-02-08',
    //   useCdn: false,
    // })
  ]
});