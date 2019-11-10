import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import { make as App } from "./App.gen";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
