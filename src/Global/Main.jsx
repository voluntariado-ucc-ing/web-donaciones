import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";


const Main = () => (
    <div>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/form" component={Form} />
        </Switch>
    </div>
);
export default Main;