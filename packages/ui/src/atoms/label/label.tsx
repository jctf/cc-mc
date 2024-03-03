import { type ReactNode } from "react";
import type { LabelProps } from "./label.types";
import styles from "./label.module.css";

export function Label({ label, className, ...rest }: LabelProps): ReactNode {
  return (
    <label className={[styles.label, className].join(" ")} {...rest}>
      {label}
    </label>
  );
}

Label.displayName = "Label";
