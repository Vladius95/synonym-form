import * as React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { SynonymsForm } from "static/page/fragments/SynonymsForm/SynonymsForm";
import { synonymsFormReducer } from "./SynonymsForm/synonyms-form-store";
import ReduxThunk from "redux-thunk";
import { synonymsReducer } from "../../stores/synonyms";
import { IntoPortal } from "../elements/IntoPortal/IntoPortal";
import { Layout } from "../elements/Layout/Layout";

const rootReducer = combineReducers({ synonymsReducer, synonymsFormReducer });

const rootStore = createStore(rootReducer, applyMiddleware(ReduxThunk));

export type RootState = ReturnType<typeof rootReducer>;

export function App() {
  return (
    <Provider store={rootStore}>
      <div className="page">
        <IntoPortal>
          <Layout />
          <SynonymsForm />
        </IntoPortal>
      </div>
    </Provider>
  );
}
