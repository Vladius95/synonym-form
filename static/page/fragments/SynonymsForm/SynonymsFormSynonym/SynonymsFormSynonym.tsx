import Edit from "./images/edit.svg";
import Delete from "./images/delete.svg";
import "./SynonymsFormSynonym.scss";

import * as React from "react";
import { Synonym } from "static/stores/synonyms";
import { IconButton } from "static/page/elements/IconButton/IconButton";
import { SynonymFormEditSynonym } from "../SynonymFormEditSynonym/SynonymFormEditSynonym";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { SynonymsFormAction, SynonymsFormState } from "../synonyms-form-store";
import { RootState } from "../../App";

export interface SynonymsFormSynonymProps {
  synonym: Synonym;
}

export function SynonymsFormSynonym({ synonym }: SynonymsFormSynonymProps) {
  const dispatchForm = useDispatch<Dispatch<SynonymsFormAction>>();
  const formState = useSelector<RootState, SynonymsFormState>(
    (state) => state.synonymsFormReducer
  );

  const toggleEdit = React.useCallback(() => {
    dispatchForm({
      type: "EDIT_FORM",
      payload: synonym,
    });
  }, [synonym]);

  const onDelete = React.useCallback(() => {
    dispatchForm({
      type: "DROP_SYNONYM",
      payload: synonym,
    });
  }, []);

  if (formState.editableSynonym && formState.editableSynonym.id === synonym.id)
    return <SynonymFormEditSynonym synonym={synonym} onCancel={toggleEdit} />;

  return (
    <div className="synonyms-form-synonym">
      <p className="synonyms-form-synonym__text">{synonym.name}</p>
      <div className="synonyms-form-synonym__actions">
        <IconButton
          onClick={toggleEdit}
          extraClass="synonyms-form-synonym__action-btn"
        >
          <img
            src={Edit}
            alt="Edit Synonym"
            className="synonyms-form-synonym__action-icon synonyms-form-synonym__action-icon_edit"
          />
        </IconButton>
        <IconButton
          onClick={onDelete}
          extraClass="synonyms-form-synonym__action-btn"
        >
          <img
            src={Delete}
            alt="Delete Synonym"
            className="synonyms-form-synonym__action-icon synonyms-form-synonym__action-icon_delete"
          />
        </IconButton>
      </div>
    </div>
  );
}
