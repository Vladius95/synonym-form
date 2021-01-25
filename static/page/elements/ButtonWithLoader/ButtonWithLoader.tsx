import "./ButtonWithLoader.scss";

import ButtonPreloader from "./images/button-preloader.svg";

import * as React from "react";
import { Button, ButtonProps } from "../Button/Button";

export interface ButtonWithLoaderProps extends ButtonProps {
  isLoading: boolean;
}

export function ButtonWithLoader({
  isLoading,
  ...buttonProps
}: ButtonWithLoaderProps) {
  const { children, ...restButtonProps } = buttonProps;
  return (
    <Button {...restButtonProps}>
      {isLoading ? (
        <div className="button-preloader-wrapper">
          <img
            src={ButtonPreloader}
            alt="Button Preloader"
            className="button-preloader"
          />
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
