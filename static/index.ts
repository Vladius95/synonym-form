import "static/css/reset.scss";
import "static/css/design/fonts.scss";

import * as ReactDOM from "react-dom";
import * as React from "react";
import { App } from "./page/fragments/App";

ReactDOM.render(React.createElement(App), document.getElementById("page-root"));
