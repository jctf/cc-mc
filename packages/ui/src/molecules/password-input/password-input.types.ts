import type { InputProps } from "../../atoms/input";

export interface PasswordInputProps {
  label: string;
  placeholder: string;
  type?: InputProps["type"];
  onSubmit: ({ password }: { password: string }) => void;
}

export interface FormValues {
  password: string;
}
