import "./Button.scss";

import * as React from "react";

export type ButtonIconTheme = "blue" | "green" | "red";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  colorTheme?: ButtonIconTheme;
  extraClass?: string;
}

export function Button({
  extraClass = "",
  colorTheme = "blue",
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      type="button"
      {...buttonProps}
      className={`button ${colorTheme} ${extraClass}`}
    />
  );
}
