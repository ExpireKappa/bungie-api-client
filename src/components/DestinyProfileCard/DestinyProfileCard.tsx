import React, {FunctionComponent, ReactElement} from "react";
import {IPlayerSearchCardProps} from "./interfaces/IDestinyProfileCardProps";
import { useHistory } from "react-router-dom";

import "./destinyProfileCard.css"

export const DestinyProfileCard: FunctionComponent<IPlayerSearchCardProps> = (props): ReactElement => {
    const iconPath = `https://www.bungie.net${props.item.profilePicturePath}`;
    const history = useHistory();

    const hasSteam = props.item.steamDisplayName !== undefined;
    const hasPsn = props.item.psnDisplayName !== undefined;
    const hasXbox = props.item.xboxDisplayName !== undefined;
    const hasStadia = props.item.stadiaDisplayName !== undefined;
    const hasBlizzard = props.item.blizzardDisplayName !== undefined;

    const getType = () => {
        if (hasStadia) {
            return 5; // TigerStadia
        }
        if (hasBlizzard) {
            return 4; // TigerBlizzard
        }

        if (hasSteam) {
            return 3; // TigerSteam
        }

        if (hasPsn) {
            return 2; // TigerPsn
        }

        if (hasXbox) {
            return 1; // TigerXbox
        }

        return 0;
    }

    const onClick = (): void => {
        history.push(`/profile/${getType()}/${props.item.membershipId}`)
    }

    return (
      <div className={"search-card-container"} onClick={e => onClick()}>
          <div className={"search-card-top-wrapper"}>
              <img className={"search-card-platform-icon"} src={iconPath} alt="Bungie account avatar"/>
              <span>{props.item.displayName}</span>
          </div>
          <div className={"search-card-platform-container"}>
              <div className="platform-title">
                  <span>Platform</span>
              </div>
              <div className="platform-list">
                {hasSteam ? <span>Steam</span> : null}
                {hasPsn ? <span>PSN</span> : null}
                {hasXbox ? <span>Xbox</span> : null}
                {hasBlizzard ? <span>Bnet</span> : null}
                {hasStadia ? <span>Stadia</span> : null}
              </div>
          </div>
      </div>
    );
}
