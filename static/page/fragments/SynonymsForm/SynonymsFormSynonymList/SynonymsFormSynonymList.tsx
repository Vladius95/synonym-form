import "./SynonymsFormSynonymList.scss";

import * as React from "react";
import { RootState } from "../../App";
import { useSelector } from "react-redux";
import { SynonymsFormSynonym } from "../SynonymsFormSynonym/SynonymsFormSynonym";
import { SynonymsFormState } from "../synonyms-form-store";
import { range } from "static/tools/range";
import { SynonymFormPreloader } from "../SynonymFormPreloader/SynonymFormPreloader";

export interface SynonymsFormSynonymListProps {
  extraClass?: string;
}

export function SynonymsFormSynonymList({
  extraClass = "",
}: SynonymsFormSynonymListProps) {
  const synonymsData = useSelector<RootState, SynonymsFormState>(
    (state) => state.synonymsFormReducer
  );

  return (
    <ul className={`synonyms-form-synonym-list ${extraClass}`}>
      {synonymsData.synonyms === undefined
        ? range(0, 4).map((i) => (
            <li key={i} className="synonyms-form-synonym-list__item">
              <SynonymFormPreloader />
            </li>
          ))
        : synonymsData.synonyms.map((s) => (
            <li key={s.id} className="synonyms-form-synonym-list__item">
              <SynonymsFormSynonym synonym={s} />
            </li>
          ))}
    </ul>
  );
}
