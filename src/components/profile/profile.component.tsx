import {FunctionComponent} from "react";

import {GeneralUser} from "bungie-api-ts/user";

import "./profile.css"

interface IProfileProps {
    profile: GeneralUser | null
}

export const Profile: FunctionComponent<IProfileProps> = (props) => {
    if (props.profile === null) {
        return <h2>ERROR LOADING PROFILE</h2>
    }
    
    const profile = props.profile; 
    const imagePath = `https://www.bungie.net${profile.profilePicturePath}`;
;      

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
            </div>
        </div>
    )
}
