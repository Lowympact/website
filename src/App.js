import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage";
import Team from "./Pages/Team";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Homepage} exact />
                    <Route path="/equipe" component={Team} exact />
                    <Redirect to="/" />
                </Switch>
            </Router>
        );
    }
}

export default App;
