module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "import", "ssr-friendly"],
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  ignorePatterns: ["*.d.ts", "dist", "node_modules"],
  rules: {
    "arrow-body-style": "off",
    "react/prop-types": "off",
    "react/no-unused-prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/no-unstable-nested-components": [
      "error",
      {
        allowAsProps: true,
      },
    ],
    "react/jsx-pascal-case": [
      "error",
      {
        allowNamespace: true,
      },
    ],
    "no-nested-ternary": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@hitachivantara/*/*"],
      },
    ],
    "no-restricted-exports": [
      "error",
      {
        restrictDefaultExports: {
          defaultFrom: false,
        },
      },
    ],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "app/**",
          "docs/**",
          "templates/**",
          "packages/icons/**",
          "**/*.config.ts",
          "**/*.stories.ts?(x)",
          "**/stories/*.ts?(x)",
          "**/*.spec.ts?(x)",
          "**/*.test.ts?(x)",
        ],
      },
    ],
    "import/no-cycle": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "@hitachivantara/**",
            group: "external",
          },
          {
            pattern: "~core/**",
            group: "internal",
          },
          {
            pattern: "~viz/**",
            group: "internal",
          }
        ],
        distinctGroup: false,
        pathGroupsExcludedImportTypes: ["builtin", "object"],
        "newlines-between": "always-and-inside-groups",
      },
    ],
    // TODO: review this
    "react/no-array-index-key": "off",
    "no-restricted-syntax": "off", // loops are fine?
    "no-param-reassign": "off",
    "consistent-return": "off",
    "import/extensions": "off",
  },
  overrides: [
    {
      files: ["packages/**/*.ts?(x)"],
      extends: ["plugin:ssr-friendly/recommended"],
    },
    {
      files: ["**/*.stories.ts?(x)"],
      rules: {
        "react-hooks/rules-of-hooks": "off",
      },
    },
    {
      files: [
        "**/*.stories.ts?(x)",
        "**/stories/**/*",
        "**/*.test.ts?(x)",
        "**/test/**/*",
        "**/templates/**/*.ts?(x)",
      ],
      rules: {
        "no-alert": "off",
        "no-console": "off",
        "no-multi-str": "off",
        "import/no-duplicates": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["**/*.config.ts"],
      rules: {
        "import/no-relative-packages": "off",
      },
    },
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["tsconfig.json", "packages/*/tsconfig.json"],
      }
    },
  },
};
