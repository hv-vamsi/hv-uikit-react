import { require, resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const pkg = require(resolve(process.cwd(), "package.json"));

const getEntryPath = () => {
  const isIcons = pkg.name.includes('icons');
  // If the package is the icon package, the entry point is the bin folder
  const entry = `${isIcons ? "bin" : "src"}/index.ts`;

  return resolve(process.cwd(), entry)
};

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
].map((ext) => new RegExp(`^${ext.split("/")[0]}`));

export default defineConfig({
  resolve: { alias: { 
    "~/": resolve(process.cwd(), "src"),
  }},
  plugins: [
    dts({
      outputDir: "dist/types",
      rollupTypes: true,
    }),
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  build: {
    target: "ES2021",
    minify: false,
    emptyOutDir: true,
    lib: {
      name: pkg.name,
      entry: resolve(process.cwd(), getEntryPath()),
    },
    rollupOptions: {
      output: [
        {
          format: "esm",
          preserveModules: true,
          dir: "dist/esm",
          entryFileNames: "[name].js",
          sourcemap: true,
          exports: "named",
          interop: "auto",
        },
        {
          format: "cjs",
          preserveModules: true,
          dir: "dist/cjs",
          entryFileNames: "[name].cjs",
          sourcemap: true,
          exports: "named",
          interop: "auto",
        },
      ],
      external,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: resolve(__dirname, "test.setup.tsx"),
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["**/package/**"],
    silent: true,
    testTimeout: 10000,
    reporters: "default",
    coverage: {
      enabled: false,
      provider: "c8",
      reporter: "lcov",
      include: ["src/**/*.ts?(x)"],
      exclude: ["src/**/stories/*", "src/**/*{test,stories,spec}.ts?(x)"],
    },
  },
});
