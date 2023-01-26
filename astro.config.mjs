import { defineConfig } from 'astro/config';
import storyblok from "@storyblok/astro";
import { loadEnv } from 'vite';
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      Mod: "storyblok/mod",
      Page: "storyblok/Page",
      "fnv-mods": "storyblok/lists/fnv",
      "morrowind-mods": "storyblok/lists/morrowind"
    }
  }), image()]
});