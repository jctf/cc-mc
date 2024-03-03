import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Atoms/Button",
  component: Button,
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => (
    <Button
      {...args}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Mastercard!");
      }}
    >
      Hello
    </Button>
  ),
  name: "Button",
  args: {
    label: "Submit",
    disabled: false,
  },
};
