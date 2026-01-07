import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-website.desplandis.github.io',
  output: 'static',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
});

