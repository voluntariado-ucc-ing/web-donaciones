import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Formulario from "./Formcopy";


const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Formulario} />
        </Switch>
    </div>
);
export default Main;