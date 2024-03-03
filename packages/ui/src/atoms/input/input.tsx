import React, { useState } from "react";
import cn from "classnames";
import { Label } from "../label";
import type { InputProps } from "./input.types";
import styles from "./input.module.css";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, htmlFor, type, errors, isValid, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const handlePasswordVisible = () => {
      if (type === "password") {
        setIsPasswordVisible(!isPasswordVisible);
      }
    };

    return (
      <div className={styles.container}>
        <Label htmlFor={htmlFor} label={label} />
        <div className={styles.inputWrapper}>
          <input
            aria-describedby={`${type}-input`}
            aria-errormessage={
              errors && errors.password ? errors.password.message : undefined
            }
            aria-invalid={errors && errors.password ? "true" : "false"} // when error then true otherwise false
            className={cn(styles.input, {
              [styles.inputError]: errors && errors.password,
              [styles.inputValid]: isValid,
            })}
            id={htmlFor}
            placeholder={placeholder}
            type={
              type === "text" ? "text" : isPasswordVisible ? "text" : "password"
            }
            {...props}
            ref={ref}
          />
          {type === "password" ? (
            <button
              aria-label={isPasswordVisible ? "Hide Password" : "Show Password"}
              className={styles.button}
              onClick={handlePasswordVisible}
              type="button"
            >
              <svg
                className={styles.icon}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                  style={{ display: isPasswordVisible ? "none" : "block" }}
                />
                <path
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                  style={{ display: isPasswordVisible ? "none" : "block" }}
                />
                <path
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                  style={{ display: isPasswordVisible ? "none" : "block" }}
                />
                <line
                  style={{ display: isPasswordVisible ? "none" : "block" }}
                  x1="2"
                  x2="22"
                  y1="2"
                  y2="22"
                />
                <path
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                  style={{ display: isPasswordVisible ? "block" : "none" }}
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  style={{ display: isPasswordVisible ? "block" : "none" }}
                />
              </svg>
            </button>
          ) : null}
        </div>
        {type === "password" && errors && errors.password ? (
          <p className={styles.alertErrorMesage} role="alert">
            {errors.password.message}
          </p>
        ) : null}
        {type === "password" && isValid ? (
          <p className={styles.alertValidatedMessage} role="alert">
            Password is valid
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
