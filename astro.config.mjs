import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), image(), astroImageTools],

  experimental: {
    assets: true,
  },
});
