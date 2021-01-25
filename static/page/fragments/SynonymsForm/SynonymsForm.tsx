import "./SynonymsForm.scss";

import * as React from "react";
import { SynonymsFormHeader } from "./SynonymsFormHeader/SynonymsFormHeader";
import { SynonymsFormAddition } from "./SynonymsFormNameInput/SynonymsFormNameInput";
import { SynonymsFormSynonymList } from "./SynonymsFormSynonymList/SynonymsFormSynonymList";
import { SynonymsFormFooter } from "./SynonymsFormFooter/SynonymsFormFooter";
import { SynonymFormTip } from "./SynonymFormTip/SynonymFormTip";
import {
  getSynonyms,
  Synonym,
  SynonymsAction,
  SynonymsState,
} from "static/stores/synonyms";
import { RootState } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { SynonymsFormAction } from "./synonyms-form-store";

export interface SynonymFormProps {}

export function SynonymsForm({}: SynonymFormProps) {
  const synonymsData = useSelector<RootState, SynonymsState>(
    (state) => state.synonymsReducer
  );
  const dispatchSynonymsStore = useDispatch<Dispatch<SynonymsAction>>();

  const dispatchForm = useDispatch<Dispatch<SynonymsFormAction>>();

  // Загружаем текущий список синонимов, если он не был еще загружен
  React.useEffect(() => {
    if (synonymsData.status !== "loaded") {
      getSynonyms(dispatchSynonymsStore);
    }
  }, []);

  React.useEffect(() => {
    dispatchForm({ type: "INIT_FORM", payload: synonymsData.synonyms });
  }, [synonymsData.synonyms]);

  React.useEffect(() => {
    return () => dispatchForm({ type: "RESET_FORM", payload: [] });
  });

  return (
    <form className="synonyms-form">
      <header className="synonyms-form__header">
        <SynonymsFormHeader onClose={console.log} />
      </header>
      <SynonymFormTip extraClass="synonyms-form__tip" />
      <SynonymsFormAddition extraClass="synonyms-form__add-input" />
      <SynonymsFormSynonymList extraClass="synonyms-form__list" />

      <footer className="synonyms-form__footer">
        <SynonymsFormFooter />
      </footer>
    </form>
  );
}
