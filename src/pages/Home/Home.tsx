import { FunctionComponent } from "react";
import { DestinyProfileCard } from "../../components/DestinyProfileCard/DestinyProfileCard";
import { Input } from "../../components/Input/Input";

import "./home.css";

interface IPlayerCard {
    platformIconPath: string
    displayName: string;
}

export const Home: FunctionComponent = () => {
    const players: Array<IPlayerCard> = [
        {
            displayName: "Reasonable Name",
            platformIconPath: "/logo192.png"
        },
        {
            displayName: "Super Long Name That Could Be Really Painful",
            platformIconPath: "/logo192.png"
        },
        {
            displayName: "Name",
            platformIconPath: "/logo192.png"
        }
    ]
    
    return (
        <div className={"search"}>
            <div className={"search__input-container"}>
                <Input className={"search__input"} placeholder="Search by Bungie Name"/>
            </div>
            <div className={"search-results"}>
                {players.map(player => {
                    return (<DestinyProfileCard player={player} key={players.indexOf(player)}/> )
                })}
            </div>
        </div>
    );
} 