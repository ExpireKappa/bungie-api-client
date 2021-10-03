import { FunctionComponent } from "react";

import "./destinyProfileCard.css"

interface IDestinyProfileCardProps {
    player: {
        platformIconPath: string
        displayName: string;
        displayCode?: number | undefined;
    }
}

const platformUrl = "https://bungie.net";

export const DestinyProfileCard: FunctionComponent<IDestinyProfileCardProps> = (props) => {
    const platformIcon = platformUrl + props.player.platformIconPath;
    
    return (
        <div className={"profile-card"}>
            <img className={"profile-card__platform-icon"} src={platformIcon} alt="Player's platform icon" />
            <div className={"profile-card__display-name"}>
                <span>{props.player.displayName}{props.player.displayCode && <span className={"profile-card__bungie-namecode"}>#{props.player.displayCode}</span>}</span>
            </div>
        </div>
    );
}
