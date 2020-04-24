import React from "react";
import ReactDOM from "react-dom";
import Web from "./Global/Web";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Web />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
