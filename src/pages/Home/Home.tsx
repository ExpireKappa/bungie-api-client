import { FunctionComponent } from "react";
import { Input } from "../../components/Input/Input";

import "./home.css";

interface IPlayerCard {
    avatarPath: string;
    name: string;
}

export const Home: FunctionComponent = () => {
    const players: Array<IPlayerCard> = [
        {
            avatarPath: "/logo192.png",
            name: "Reasonable Name"
        },
        {
            avatarPath: "/logo192.png",
            name: "Super Long Name That Could Be Really Painful"
        },
        {
            avatarPath: "/logo192.png",
            name: "Name"
        }
    ]
    
    return (
        <div className={"search"}>
            <div className={"search__input-container"}>
                <Input className={"search__input"} placeholder="Search by Bungie Name"/>
            </div>
            <div className={"search-results"}>
                {players.map(player => {
                    return (
                        <div className={"search-result"}>
                            <img className={"search-result__player-avatar"} src={player.avatarPath} alt="Player avatar" />
                            <div className={"search-result__player-info"}>
                                <span>{player.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
} 