import linaria from "@linaria/rollup";

const config = {
  stories: [
    "../../packages/**/*.stories.mdx",
    "../../packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config, { configType }) {
    config.plugins = [...config.plugins, linaria()];

    return config;
  },
  docs: {
    autodocs: true,
  },
};

export default config;
