import { Action, Reducer, createStore, Dispatch } from "redux";
import { Synonym } from "static/stores/synonyms";

export type SynonymsFormState = {
  editableSynonym?: Synonym;
  synonyms?: Synonym[];
};

export interface SynonymsFormAction extends Action {
  payload: Synonym | Synonym[];
  type:
    | "INIT_FORM"
    | "EDIT_FORM"
    | "ADD_SYNONYM"
    | "EDIT_SYNONYM"
    | "DROP_SYNONYM"
    | "RESET_FORM";
}

const initialSynonymsFormState: SynonymsFormState = {};

export const synonymsFormReducer: Reducer<
  SynonymsFormState,
  SynonymsFormAction
> = (
  state = initialSynonymsFormState,
  action: SynonymsFormAction
): SynonymsFormState => {
  switch (action.type) {
    case "INIT_FORM":
      return { ...state, synonyms: action.payload as Synonym[] | undefined };

    case "EDIT_FORM": {
      const editableSynonym = action.payload as Synonym;
      return {
        ...state,
        editableSynonym:
          state.editableSynonym &&
          editableSynonym.id === state.editableSynonym.id
            ? undefined
            : editableSynonym,
      };
    }

    case "RESET_FORM":
      return initialSynonymsFormState;

    case "ADD_SYNONYM":
      return {
        ...state,
        synonyms: [...state.synonyms, action.payload as Synonym],
      };

    case "EDIT_SYNONYM": {
      const editSynonym = action.payload as Synonym;
      return {
        ...state,
        synonyms: state.synonyms.reduce((newState, item) => {
          let synonym = item;

          if (item.id === editSynonym.id) {
            synonym = editSynonym;
          }

          newState.push(synonym);
          return newState;
        }, []),
      };
    }

    case "DROP_SYNONYM": {
      return {
        ...state,
        synonyms: state.synonyms.filter(
          (s) => s.id !== (action.payload as Synonym).id
        ),
      };
    }

    default:
      return state;
  }
};

export const synonymsFormStore = createStore(synonymsFormReducer);
