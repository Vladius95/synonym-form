import { Action, Reducer, createStore, Dispatch } from "redux";
import { localStore } from "static/tools/local-store";
import { wait } from "static/tools/wait";

export function saveSynonyms(
  dispatch: Dispatch<SynonymsAction>,
  synonyms: Synonym[]
) {
  localStore["synonyms"] = synonyms;
  dispatch({ type: "SAVE_SYNONYMS", payload: { status: "loaded", synonyms } });
}

// "Запрос"
export async function getSynonyms(dispatch: Dispatch<SynonymsAction>) {
  dispatch({
    type: "FETCH_SYNONYMS",
    payload: { status: "loading", synonyms: undefined },
  });
  await wait(1500);
  const synonyms = localStore["synonyms"] || [];
  dispatch({ type: "SAVE_SYNONYMS", payload: { status: "loaded", synonyms } });
}

export function resetSynonyms(dispatch: Dispatch<SynonymsAction>) {
  saveSynonyms(dispatch, []);
}

export interface Synonym {
  id: number;
  name: string;
}

export type SynonymsState = {
  status: "init" | "loading" | "loaded";
  synonyms?: Synonym[];
};

export interface SynonymsAction extends Action {
  payload: SynonymsState;
  type: "FETCH_SYNONYMS" | "RESPONSE_SYNONYMS" | "SAVE_SYNONYMS";
}

const initialSynonymsState: SynonymsState = {
  status: "init",
};

export const synonymsReducer: Reducer<SynonymsState, SynonymsAction> = (
  state = initialSynonymsState,
  action: SynonymsAction
) => {
  switch (action.type) {
    case "FETCH_SYNONYMS":
      return { ...state, status: "loading" };

    case "RESPONSE_SYNONYMS":
      return { ...state, status: "loaded", synonyms: action.payload.synonyms };

    case "SAVE_SYNONYMS":
      return action.payload;

    default:
      return state;
  }
};

export const synonymsStore = createStore(synonymsReducer);
