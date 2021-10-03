import { ChangeEvent, FunctionComponent, useEffect, useMemo, useState } from "react";
import { SearchByGlobalNamePrefix } from "../../api/user/api";
import { DestinyProfileCard } from "../../components/DestinyProfileCard/DestinyProfileCard";
import { Input } from "../../components/Input/Input";
import debounce from 'lodash.debounce';

import "./home.css";

interface IPlayerCard {
    platformIconPath: string
    displayName: string;
}

export const Home: FunctionComponent = () => {
    let [players, setPlayers] = useState<Array<IPlayerCard>>([]);
    let [hasNoProfiles, setHasNoProfiles] = useState<boolean>(false);

    const onTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value === "") {
            setPlayers([]);
            setHasNoProfiles(false)
            return;
        }

        SearchByGlobalNamePrefix(value, 0).then(response => {
            if (response.searchResults.length === 0) {
                setPlayers([]);
                setHasNoProfiles(true)
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
            
            setPlayers(formattedUsers);
            setHasNoProfiles(false) 
        });
    }

    const debouncedChangeHandler = useMemo(
        () => debounce(onTextInputChange, 500), 
        []
    );

    useEffect(() => {
        return () => {
            debouncedChangeHandler.cancel()
        }
    });

    return (
        <div className={"search"}>
            <div className={"search__input-container"}>
                <Input className={"search__input"} placeholder="Search by Bungie Name" onChange={debouncedChangeHandler}/>
            </div>
            <div className={"search-results"}>
                {hasNoProfiles && <span>No profiles found</span>}
                {players.length > 0 && players.map(player => {
                    return (<DestinyProfileCard player={player} key={players.indexOf(player)}/> )
                })}
            </div>
        </div>
    );
} 