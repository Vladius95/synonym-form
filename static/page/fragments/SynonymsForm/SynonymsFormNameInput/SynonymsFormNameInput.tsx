import "./SynonymsFormNameInput.scss";
import * as React from "react";
import { Button } from "static/page/elements/Button/Button";
import { TextField } from "static/page/elements/TextField/TextField";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { SynonymsFormAction, SynonymsFormState } from "../synonyms-form-store";
import { RootState } from "../../App";

export interface SynonymsFormNameInputProps {
  extraClass?: string;
}

export function SynonymsFormAddition({
  extraClass = "",
}: SynonymsFormNameInputProps) {
  const [text, setText] = React.useState("");
  const dispatchForm = useDispatch<Dispatch<SynonymsFormAction>>();
  const formState = useSelector<RootState, SynonymsFormState>(
    (state) => state.synonymsFormReducer
  );

  const onSave = React.useCallback(() => {
    if (text.length === 0) return;

    dispatchForm({
      type: "ADD_SYNONYM",
      payload: { id: new Date().getTime(), name: text },
    });
    setText("");
  }, [text]);

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value);
    },
    []
  );

  const onKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSave();
      }
    },
    [onSave]
  );

  if (formState.editableSynonym) return null;

  return (
    <div className={`synonyms-form-name-input ${extraClass}`}>
      <label htmlFor="synonym-name" className="synonyms-form-name-input__label">
        добавление синонима:
      </label>
      <TextField
        id="synonym-name"
        name="synonym-name"
        type="text"
        value={text}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Введите название"
        autoFocus
        extraClass="synonyms-form-name-input__input-name"
        maxLength={64}
      />
      <Button
        onClick={onSave}
        disabled={text.length === 0}
        extraClass="synonyms-form-name-input__add-btn"
      >
        <p className="synonyms-form-name-input__btn-text">добавить</p>
      </Button>
    </div>
  );
}
