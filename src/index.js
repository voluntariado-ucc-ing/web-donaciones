import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Web from "./Global/Web";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Router>
            <Web />
    </Router>
 ,
  document.getElementById("root")
);

serviceWorker.unregister();
