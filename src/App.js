import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Homepage} exact />
                    <Redirect to="/" />
                </Switch>
            </Router>
        );
    }
}

export default App;
