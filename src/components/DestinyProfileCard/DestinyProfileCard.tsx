import { FunctionComponent } from "react";

import "./destinyProfileCard.css"

interface IDestinyProfileCardProps {
    player: {
        platformIconPath: string
        displayName: string;
    }
}

const platformUrl = "https://bungie.net";

export const DestinyProfileCard: FunctionComponent<IDestinyProfileCardProps> = (props) => {
    const platformIcon = platformUrl + props.player.platformIconPath;
    
    return (
        <div className={"profile-card"}>
            <img className={"profile-card__platform-icon"} src={platformIcon} alt="Player's platform icon" />
            <div className={"profile-card__display-name"}>
                <span>{props.player.displayName}</span>
            </div>
        </div>
    );
}
