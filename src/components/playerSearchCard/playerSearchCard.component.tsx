import React, {FunctionComponent} from "react";

import {IPlayerSearchCardProps} from "./interfaces/IPlayerSearchCardProps";

import { useHistory } from "react-router-dom";

import "./playerSearchCard.css"
import {BungieMembershipType} from "bungie-api-ts/common";

export const PlayerSearchCard: FunctionComponent<IPlayerSearchCardProps> = (props) => {
    const iconPath = `https://www.bungie.net${props.item.profilePicturePath}`;
    const history = useHistory();

    const hasSteam = props.item.steamDisplayName !== undefined;
    const hasPsn = props.item.psnDisplayName !== undefined;
    const hasXbox = props.item.xboxDisplayName !== undefined;

    const getType = () => {
        if (hasSteam) {
            return 3; // TigerSteam
        }

        if (hasPsn) {
            return 2; // TigerPsn
        }

        if (hasXbox) {
            return 1; // TigerXbox
        }
    }


    const onClick = () => {
        history.push(`/profile/${getType()}/${props.item.membershipId}`)
    }

    return (
      <div className={"search-card-container"} onClick={e => onClick()}>
          <div className={"search-card-top-wrapper"}>
              <img className={"search-card-platform-icon"} src={iconPath} alt={"User platform icon"}/>
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
              </div>
          </div>
      </div>
    );
}
