import type { ButtonHTMLAttributes, MouseEvent } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
