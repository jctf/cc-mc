import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { PasswordInput } from "./password-input";

const meta: Meta<typeof PasswordInput> = {
  title: "UI/Molecules/Password",
  component: PasswordInput,
  args: {
    // 👇 Create an action that appears when the onClick event is fired
    onSubmit: action("on-submit"),
  },
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Primary: Story = {
  render: (args) => (
    <PasswordInput
      {...args}
      onSubmit={({ password }: { password: string }): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert(`You success updated your password 😉${password}`);
      }}
    />
  ),
  name: "PasswordInput",
  args: {
    label: "Password",
    placeholder: "Please enter you password",
  },
};
