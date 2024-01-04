import { Meta, StoryObj } from "@storybook/react";
import { ds3, ds5 } from "@hitachivantara/uikit-styles";
import { HvTypography } from "@hitachivantara/uikit-react-core";

import { HvProvider, HvProviderProps } from "./Provider";

const meta: Meta<typeof HvProvider> = {
  title: "Providers/Provider",
  component: HvProvider,
};

export default meta;

export const Main: StoryObj<HvProviderProps> = {
  args: {},
  tags: ["test"],
  render: () => null,
};
