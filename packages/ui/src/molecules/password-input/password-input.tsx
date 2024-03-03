import type { ReactNode } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../atoms/input";
import { Button } from "../../atoms/button";
import styles from "./password-input.module.css";
import type { FormValues, PasswordInputProps } from "./password-input.types";

export function PasswordInput({
  label,
  placeholder,
  onSubmit,
}: PasswordInputProps): ReactNode {
  const passwordSchema = Yup.object().shape({
    password: Yup.string()
      .required("Mandatory field - cannot be blank")
      .matches(/[A-Z]/, "At least one uppercase letter is required")
      .matches(/\d/, "At least one digit is required")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "At least one special character is required",
      )
      .min(8, "At least 8 characters are required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(passwordSchema),
  });

  const handleOnSend: SubmitHandler<FormValues> = ({ password }, e) => {
    e?.preventDefault();
    onSubmit({ password });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(handleOnSend)}>
      <Input
        errors={errors}
        isValid={isValid}
        label={label}
        placeholder={placeholder}
        type="password"
        {...register("password")}
      />
      <Button disabled={!isValid} label="Submit" />
    </form>
  );
}

PasswordInput.displayName = "PasswordInput";
