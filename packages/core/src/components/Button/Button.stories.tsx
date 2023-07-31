import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: "primary",
    size: "small",
  },
  render: (props) => (
    <Button {...props}>{`${props.intent} ${props.size}`}</Button>
  ),
};
