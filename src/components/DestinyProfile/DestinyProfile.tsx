import {FunctionComponent} from "react";
import {GeneralUser} from "bungie-api-ts/user";

import "./destinyProfile.css"
import { DestinyCharacterCard } from "../DestinyCharacterCard/DestinyCharacterCard";

interface IProfileProps {
    profile: GeneralUser | null
    characters: any | null;
}

export const DestinyProfile: FunctionComponent<IProfileProps> = (props) => {
    if (props.profile === null || props.characters === null) {
        return <h2>ERROR LOADING PROFILE</h2>
    }

    const characterIds = Object.keys(props.characters)

    const profile = props.profile; 
    const imagePath = `https://www.bungie.net${profile.profilePicturePath}`;
    
    return (
        <div className={"profile-container"}>
            <div className={"profile-name-container"}>
                <img className={"profile-picture"} alt="Bungie account avatar" src={imagePath}/>
                <div>
                    <h1>{profile?.displayName}</h1>
                    <p>{profile?.about}</p>
                </div>
            </div>
            <div>
                <h2>Characters</h2>
                <div>
                    {
                        characterIds.map((characterId) => <DestinyCharacterCard character={props.characters[characterId]} key={characterId}/>)
                    }
                </div>
            </div>
        </div>
    )
}
