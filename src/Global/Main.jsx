import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Formcopy";
import Prueba from "../prueba";
import Volunteers from "./Volunteers";


const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path={"/prueba"} component={Prueba}/>
            <Route path="/volunteers" component={Volunteers} />
        </Switch>
    </div>
);
export default Main;