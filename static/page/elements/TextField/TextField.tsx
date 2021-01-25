import "./TextField.scss";
import Error from "./images/error.svg";

import * as React from "react";

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  errorText?: string;
  isError?: boolean;
  extraClass?: string;
}

export function TextField({
  extraClass = "",
  isError,
  errorText,
  ...inputProps
}: TextFieldProps) {
  return (
    <div className="text-field">
      <input {...inputProps} className={`text-field__input ${extraClass}`} />
      {isError && (
        <div className="text-field__error">
          <img src={Error} alt="Error" className="text-field__error-icon" />
          <p className="text-field__error-text">{errorText}</p>
        </div>
      )}
    </div>
  );
}
