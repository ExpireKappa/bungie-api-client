import { FunctionComponent } from "react";

import "./destinyProfileCard.css"

interface IDestinyProfileCardProps {
    player: {
        platformIconPath: string
        displayName: string;
    }
}

export const DestinyProfileCard: FunctionComponent<IDestinyProfileCardProps> = (props) => {
    return (
        <div className={"profile-card"}>
            <img className={"profile-card__platform-icon"} src={props.player.platformIconPath} alt="Player's platform icon" />
            <div className={"profile-card__display-name"}>
                <span>{props.player.displayName}</span>
            </div>
        </div>
    );
}
