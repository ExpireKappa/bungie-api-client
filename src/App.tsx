import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Search } from './pages/Search/Search';
import { Profile } from './pages/Profile/Profile';
import { NavBar } from "./components/NavBar/NavBar";
import './App.css';

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    {/* hopefully the search can be more widespread against the api in the future*/}
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/profile/:membershipType/:membershipId">
                        <Profile />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
