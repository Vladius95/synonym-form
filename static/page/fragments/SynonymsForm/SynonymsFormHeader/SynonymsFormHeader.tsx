import "./SynonymsFormHeader.scss";
import Close from "static/page/fragments/SynonymsForm/SynonymsFormHeader/images/close.svg";

import * as React from "react";
import { IconButton } from "static/page/elements/IconButton/IconButton";

export interface SynonymsFormHeaderProps {
  onClose: VoidFunction;
}

export function SynonymsFormHeader({ onClose }: SynonymsFormHeaderProps) {
  return (
    <div className="synonyms-form-header">
      <h3 className="synonyms-form-header__title">
        Редактирование группы синонимов поисковых фраз
      </h3>
      <IconButton
        onClick={onClose}
        isAlwaysActive
        extraClass="synonyms-form-header__close-btn"
      >
        <img
          src={Close}
          alt="Close Form"
          className="synonyms-form-header__close-icon"
        />
      </IconButton>
    </div>
  );
}
