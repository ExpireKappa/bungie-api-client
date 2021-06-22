import React from 'react';
import {PlayerSearch} from "./components/playerSearch/playerSearch.component";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import './App.css';
import {ProfileWrapper} from "./components/profile/profileWrapper.component";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <PlayerSearch />
                </Route>
                <Route path="/profile/:membershipId">
                    <ProfileWrapper />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
