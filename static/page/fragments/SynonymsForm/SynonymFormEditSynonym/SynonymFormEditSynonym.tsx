import close from "./images/close.svg";
import "./SynonymFormEditSynonym.scss";

import * as React from "react";
import { Button } from "static/page/elements/Button/Button";
import { IconButton } from "static/page/elements/IconButton/IconButton";
import { TextField } from "static/page/elements/TextField/TextField";
import { Synonym } from "static/stores/synonyms";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { SynonymsFormAction } from "../synonyms-form-store";

export interface SynonymFormEditSynonymProps {
  synonym: Synonym;
  onCancel: VoidFunction;
}

export function SynonymFormEditSynonym({
  synonym,
  onCancel,
}: SynonymFormEditSynonymProps) {
  const [text, setText] = React.useState(synonym.name);
  const dispatchForm = useDispatch<Dispatch<SynonymsFormAction>>();

  const onChange = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  }, []);

  const onSave = React.useCallback(() => {
    if (text.length === 0) return;

    dispatchForm({
      type: "EDIT_SYNONYM",
      payload: { id: synonym.id, name: text },
    });
    onCancel();
  }, [synonym.id, text, onCancel]);

  const onKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSave();
      }
    },
    [onSave]
  );

  return (
    <div className="synonym-form-edit-synonym">
      <label
        htmlFor="synonym-name"
        className="synonym-form-edit-synonym__label"
      >
        редактирование синонима:
      </label>
      <TextField
        id="synonym-name"
        name="synonym-name"
        type="text"
        value={text}
        placeholder="Введите название"
        autoFocus
        onChange={onChange}
        onKeyDown={onKeyDown}
        extraClass="synonym-form-edit-synonym__input"
        maxLength={64}
      />
      <div className="synonym-form-edit-synonym__actions">
        <Button
          disabled={text.length === 0}
          onClick={onSave}
          extraClass="synonym-form-edit-synonym__save-btn"
        >
          <p className="synonym-form-edit-synonym__save-btn-text">Сохранить</p>
        </Button>
        <IconButton
          isAlwaysActive
          onClick={onCancel}
          extraClass="synonym-form-edit-synonym__icon-btn"
        >
          <img
            src={close}
            alt="Close Edit Synonym"
            className="synonym-form-edit-synonym__close-icon"
          />
        </IconButton>
      </div>
    </div>
  );
}
