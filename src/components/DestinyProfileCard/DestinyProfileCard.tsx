import { FunctionComponent } from "react";

import "./destinyProfileCard.css"

interface IDestinyProfileCardProps {
    player: {
        avatarPath: string
        name: string;
    }
}

export const DestinyProfileCard: FunctionComponent<IDestinyProfileCardProps> = (props) => {
    return (
        <div className={"profile-card"}>
            <img className={"profile-card__player-avatar"} src={props.player.avatarPath} alt="Player avatar" />
            <div className={"profile-card__player-info"}>
                <span>{props.player.name}</span>
            </div>
        </div>
    );
}
