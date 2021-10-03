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
    let [inputValue, setInputValue] = useState<string>("");

    const onTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        if (value === "") {
            setPlayers([]);
            return;
        }

        SearchByGlobalNamePrefix(value, 0).then(response => {
            if (response.searchResults.length === 0) {
                setPlayers([]);
                return;
            }
            
            const validUsers = response.searchResults.filter(player => player.destinyMemberships.length !== 0);
            
            // Could do extra processing to split bungie name inputs by #
            // Then sort the results by the provided bungieId
            const formattedUsers = validUsers.map(player => {
                return {
                    displayName: player.bungieGlobalDisplayName,
                    platformIconPath: player.destinyMemberships[0].iconPath
                }
            })
            
            // Feel the need for debouncing on the input here
            setPlayers(formattedUsers); 
        });
    }

    const containsNoProfiles = players.length === 0 && inputValue !== "";
    return (
        <div className={"search"}>
            <div className={"search__input-container"}>
                <Input className={"search__input"} placeholder="Search by Bungie Name" onChange={onTextInputChange}/>
            </div>
            <div className={"search-results"}>
                {containsNoProfiles && <span>No profiles found</span>}
                {players.length > 0 && players.map(player => {
                    return (<DestinyProfileCard player={player} key={players.indexOf(player)}/> )
                })}
            </div>
        </div>
    );
} 