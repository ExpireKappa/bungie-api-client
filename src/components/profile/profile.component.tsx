import {FunctionComponent} from "react";

import {GeneralUser} from "bungie-api-ts/user";

import "./profile.css"
import { DestinyCharacterComponent, DestinyClass } from "bungie-api-ts/destiny2";
import { DictionaryComponentResponse } from "bungie-api-ts/destiny2";

interface IProfileProps {
    profile: GeneralUser | null
    characters: any | null;
}

export const Profile: FunctionComponent<IProfileProps> = (props) => {
    if (props.profile === null || props.characters === null) {
        return <h2>ERROR LOADING PROFILE</h2>
    }

    console.log(props.characters);
    
    
    const profile = props.profile; 
    const imagePath = `https://www.bungie.net${profile.profilePicturePath}`;
    
    const getClass = (characterClass: DestinyClass) => {
        if (characterClass === 1) {
            return "Hunter"
        }
        if (characterClass === 0) {
            return "Titan"
        }
        if (characterClass === 2) {
            return "Warlock"
        }
    }

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
                    {props.characters["2305843009344005649"] !== undefined &&
                        <div>
                            <p>{getClass(props.characters["2305843009344005649"].classType)}</p>
                        </div>
                    }
                    {props.characters["2305843009346764294"] !== undefined &&
                        <div>
                            <p>{getClass(props.characters["2305843009346764294"].classType)}</p>
                        </div>
                    }
                    {props.characters["2305843009347204873"] !== undefined &&
                        <div>
                            <p>{getClass(props.characters["2305843009347204873"].classType)}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
