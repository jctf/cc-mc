import { type MouseEvent, type ReactNode } from "react";
import cn from "classnames";
import type { ButtonProps } from "./button.types";
import styles from "./button.module.css";

export function Button({
  label,
  className,
  disabled,
  onClick,
  ...props
}: ButtonProps): ReactNode {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick?.(e);
    }
  };

  return (
    <button
      aria-disabled={disabled}
      aria-label={label}
      aria-labelledby={label}
      className={cn(
        styles.button,
        {
          [styles.disabled]: disabled,
        },
        className,
      )}
      onClick={handleOnClick}
      {...props}
    >
      {label}
    </button>
  );
}

Button.displayName = "Button";
