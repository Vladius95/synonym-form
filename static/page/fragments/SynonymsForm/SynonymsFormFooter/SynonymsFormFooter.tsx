import "./SynonymsFormFooter.scss";

import * as React from "react";
import { Button } from "static/page/elements/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../App";
import { Dispatch } from "redux";
import { SynonymsFormState } from "../synonyms-form-store";
import {
  resetSynonyms,
  saveSynonyms,
  Synonym,
  SynonymsAction,
} from "static/stores/synonyms";

function isButtonDisabled(
  synonyms: Synonym[] | undefined,
  editableSynonym: Synonym
) {
  return !synonyms || synonyms.length === 0 || !!editableSynonym;
}

export function SynonymsFormFooter() {
  const formState = useSelector<RootState, SynonymsFormState>(
    (state) => state.synonymsFormReducer
  );
  const dispatchSynonymsStore = useDispatch<Dispatch<SynonymsAction>>();

  const onSave = React.useCallback(() => {
    saveSynonyms(dispatchSynonymsStore, formState.synonyms);
  }, [formState.synonyms]);

  const onReset = React.useCallback(() => {
    resetSynonyms(dispatchSynonymsStore);
  }, []);

  return (
    <div className="synonyms-form-footer">
      <Button
        disabled={isButtonDisabled(
          formState.synonyms,
          formState.editableSynonym
        )}
        onClick={onSave}
        colorTheme="green"
        extraClass="synonyms-form-footer__btn synonyms-form-footer__btn_edit"
      >
        <p className="synonyms-form-footer__button-text">сохранить изменения</p>
      </Button>
      <Button
        disabled={isButtonDisabled(
          formState.synonyms,
          formState.editableSynonym
        )}
        onClick={onReset}
        colorTheme="red"
        extraClass="synonyms-form-footer__btn synonyms-form-footer__btn_reset"
      >
        <p className="synonyms-form-footer__button-text">очистить синонимы</p>
      </Button>
    </div>
  );
}
