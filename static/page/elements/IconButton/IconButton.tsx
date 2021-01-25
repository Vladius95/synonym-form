import "./IconButton.scss";

import * as React from "react";

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  isAlwaysActive?: boolean;
  extraClass?: string;
}

export function IconButton({
  extraClass,
  isAlwaysActive = false,
  ...buttonProps
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={`icon-button ${
        isAlwaysActive ? "icon-button_always-active" : ""
      } ${extraClass}`}
      {...buttonProps}
    />
  );
}
