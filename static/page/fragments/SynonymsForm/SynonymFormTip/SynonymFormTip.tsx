import "./SynonymFormTip.scss";
import Help from "./images/help.svg";

import * as React from "react";

export interface SynonymFormTipProps {
  extraClass?: string;
}

export function SynonymFormTip({ extraClass = "" }: SynonymFormTipProps) {
  return (
    <div className={`synonyms-form-tip ${extraClass}`}>
      <p className="synonyms-form-tip__text">Синонимы</p>
      <img src={Help} alt="Synonym Help" className="synonyms-form-tip__help" />
    </div>
  );
}
