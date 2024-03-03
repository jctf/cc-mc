import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "UI/Atoms/Label",
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  render: (args) => <Label {...args} />,
  name: "Label",
  args: {
    label: "Label",
  },
};
