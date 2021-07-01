import React from 'react';
import {PlayerSearch} from "./components/playerSearch/playerSearch.component";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import './App.css';
import {ProfileWrapper} from "./components/profile/profileWrapper.component";
import {Dashboard} from "./components/dashboard/dashboard.component";
import {NavBar} from "./components/nav-bar/nav-bar.component";

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact>
                        <Dashboard />
                    </Route>
                    {/* hopefully the search can be more widespread against the api in the future*/}
                    <Route path="/search">
                        <PlayerSearch />
                    </Route>
                    <Route path="/profile/:membershipType/:membershipId">
                        <ProfileWrapper />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
