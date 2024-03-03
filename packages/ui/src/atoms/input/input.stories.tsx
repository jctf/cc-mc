import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "UI/Atoms/Input",
  component: Input,
  argTypes: {
    type: {
      options: ["text", "password"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  render: (args) => (
    <Input
      onChange={({ target: { value } }) => {
        console.log(value);
      }}
      {...args}
    />
  ),
  name: "Input",
  args: {
    label: "Label",
    placeholder: "Please 📝",
    type: "text",
  },
};
