import "./SynonymFormPreloader.scss";

import * as React from "react";
import { Preloader } from "static/page/elements/Preloader/Preloader";

export function SynonymFormPreloader() {
  return (
    <div className="synonym-form-preloader">
      <Preloader extraClass="synonym-form-preloader__text" />

      <div className="synonym-form-preloader__actions">
        <Preloader extraClass="synonym-form-preloader__action" />
        <Preloader extraClass="synonym-form-preloader__action" />
      </div>
    </div>
  );
}
