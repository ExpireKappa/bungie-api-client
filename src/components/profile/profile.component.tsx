import {FunctionComponent} from "react";

import {GeneralUser} from "bungie-api-ts/user";

import "./profile.css"

interface IProfileProps {
    profile: GeneralUser | null
}

export const Profile: FunctionComponent<IProfileProps> = (props) => {
    const profile = props.profile;

    return (
        <div className={"profile-container"}>
            <div className={"profile-name-container"}>
                <img className={"profile-picture"} src={`https://www.bungie.net${profile?.profilePicturePath}`}/>
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
