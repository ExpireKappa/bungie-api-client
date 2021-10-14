import { BungieMembershipType } from "bungie-api-ts/common";
import { FunctionComponent } from "react";

import "./destinyProfileCard.css"

interface IDestinyProfileCardProps {
    player: {
        platform: BungieMembershipType
        displayName: string;
        displayCode?: number | undefined;
    }
}

const findPlatform = (membershipType: BungieMembershipType): string => {
    switch(membershipType) {
        case 1: // TigerXbox
            return "xbox"
        case 2: // TigerPsn
            return "psn"
        case 3: // TigerSteam
            return "steam"
        case 4: // TigerBlizzard
            return "blizzard"
        case 5: // TigerStadia
            return "stadia"
        default:
            return ""
    }
}

export const DestinyProfileCard: FunctionComponent<IDestinyProfileCardProps> = (props) => {
    return (
        <div className={"profile-card"}>
            <div className={`profile-card__platform-icon ${findPlatform(props.player.platform)}`} ></div>
            <div className={"profile-card__display-name"}>
                <span>{props.player.displayName}{props.player.displayCode && <span className={"profile-card__bungie-namecode"}>#{props.player.displayCode}</span>}</span>
            </div>
        </div>
    );
}
