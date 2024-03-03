import type { InputHTMLAttributes, Ref } from "react";
import type { FieldErrors } from "react-hook-form/dist/types/errors";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  htmlFor?: string;
  ref: Ref<HTMLInputElement>;
  errors: FieldErrors<{ password: string }>;
  isValid: boolean;
}
