import React from 'react';
import {PlayerSearch} from "./components/playerSearch/playerSearch.component";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <PlayerSearch />
                </Route>
                <Route path="/profile/:membershipId">
                    <h1>Profile</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
