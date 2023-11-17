import { mergeConfig, UserConfig } from "vite";

import viteConfig from "../../.config/vite.config";

export default mergeConfig(viteConfig as UserConfig, {
  build: {
    rollupOptions: {
      output: [
        {
          format: "esm",
          dir: "dist/bundles",
          sourcemap: true,
        },
      ],
    },
  },
});
