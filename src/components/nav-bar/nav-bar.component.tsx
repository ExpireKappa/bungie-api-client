import { Link } from "react-router-dom";

import "./nav-bar.css";

export const NavBar = () => {
    return (
        <div className="nav-container">
            <h1 className="nav-app-title">BUNGIE-API-CLIENT</h1>
            <ul className="nav-list-container">
                <li className="nav-list-item">
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    );
}
