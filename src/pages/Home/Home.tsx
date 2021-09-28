import { FunctionComponent } from "react";

import "./home.css";

export const Home: FunctionComponent = () => {
    return (
        <div className={"search"}>
            <div className={"search__input-container"}>
                <input className={"search__input"} placeholder="Search by Bungie Name"/>
            </div>
            <div className={"search-results"}>
                {/* Mock Data for now */}
                <div className={"search-result"}>
                    <img className={"search-result__player-avatar"} src="/logo192.png" alt="Player avatar" />
                    <div className={"search-result__player-info"}>
                        <span>Reasonable Name</span>
                    </div>
                </div>
                <div className={"search-result"}>
                    <img className={"search-result__player-avatar"} src="/logo192.png" alt="Player avatar" />
                    <div className={"search-result__player-info"}>
                        <span>Super Long Name That Could Be Really Painful</span>
                    </div>
                </div>
                <div className={"search-result"}>
                    <img className={"search-result__player-avatar"} src="/logo192.png" alt="Player avatar" />
                    <div className={"search-result__player-info"}>
                        <span>Name</span>
                    </div>
                </div>
            </div>
        </div>
    );
} 