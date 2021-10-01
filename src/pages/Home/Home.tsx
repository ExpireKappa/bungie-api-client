import { ChangeEvent, FunctionComponent, useState } from "react";
import { SearchByGlobalNamePrefix } from "../../api/user/api";
import { DestinyProfileCard } from "../../components/DestinyProfileCard/DestinyProfileCard";
import { Input } from "../../components/Input/Input";

import "./home.css";

interface IPlayerCard {
    platformIconPath: string
    displayName: string;
}

export const Home: FunctionComponent = () => {
    let [players, setPlayers] = useState<Array<IPlayerCard>>([]);

    const onTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;

        if (inputValue === "") {
            setPlayers([]);
            return;
        }

        SearchByGlobalNamePrefix(inputValue, 0).then(response => {
            // Could do extra processing to split bungie name inputs by #
            // Then sort the results by the provided bungieId
            const formattedUsers = response.searchResults.map(player => ({
                platformIconPath: player.destinyMemberships[0].iconPath,
                displayName: player.bungieGlobalDisplayName
            }))
            
            // Feel the need for debouncing on the input here
            setPlayers(formattedUsers); 
        });
    }

    return (
        <div className={"search"}>
            <div className={"search__input-container"}>
                <Input className={"search__input"} placeholder="Search by Bungie Name" onChange={onTextInputChange}/>
            </div>
            <div className={"search-results"}>
                {players && players.map(player => {
                    return (<DestinyProfileCard player={player} key={players.indexOf(player)}/> )
                })}
            </div>
        </div>
    );
} 