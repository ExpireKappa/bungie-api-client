import { ChangeEvent, FunctionComponent, useEffect, useMemo, useState } from "react";
import { SearchByGlobalNamePrefix } from "../../api/user/api";
import { DestinyProfileCard } from "../../components/DestinyProfileCard/DestinyProfileCard";
import { Input } from "../../components/Input/Input";
import debounce from 'lodash.debounce';

import "./home.css";
import { BungieMembershipType, UserSearchResponseDetail } from "bungie-api-ts/user";

interface IPlayerCard {
    displayName: string;
    displayCode?: number | undefined;
    platform: BungieMembershipType
}

const mapPlayerProfiles = (players: Array<UserSearchResponseDetail>): Array<IPlayerCard> => {
    return players.map(player => {
        return {
            displayName: player.bungieGlobalDisplayName,
            displayCode: player.bungieGlobalDisplayNameCode,
            platform: player.destinyMemberships[0].membershipType
        }
    })
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

        // Only want to search by name
        const urlSafeValue = value.split("#")[0];
        SearchByGlobalNamePrefix(urlSafeValue, 0).then(response => {
            if (response.searchResults.length === 0) {
                setPlayers([]);
                setHasNoProfiles(true)
                return;
            }
            
            const validDestinyPlayers = response.searchResults.filter(player => player.destinyMemberships.length !== 0);
            
            // Searching by bungieCode
            let profilesToDisplay: Array<IPlayerCard> = [];
            if (value.includes("#")) {
                const bungieCode = Number(value.split("#")[1]);
                const matchingProfiles = validDestinyPlayers.filter(player => player.bungieGlobalDisplayNameCode === bungieCode);
                profilesToDisplay = mapPlayerProfiles(matchingProfiles);
                
            } else {
                profilesToDisplay = mapPlayerProfiles(validDestinyPlayers);
            }
            
            setPlayers(profilesToDisplay);
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