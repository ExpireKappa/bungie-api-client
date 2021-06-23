import React, {FunctionComponent} from "react";

import {IPlayerSearchCardProps} from "./interfaces/IPlayerSearchCardProps";

import { useHistory } from "react-router-dom";

import "./playerSearchCard.css"

export const PlayerSearchCard: FunctionComponent<IPlayerSearchCardProps> = (props) => {
    const iconPath = `https://www.bungie.net${props.item.profilePicturePath}`;
    const history = useHistory();

    const onClick = () => {
        history.push(`/profile/${props.item.membershipId}`)
    }

    return (
      <div className={"search-card-container"} onClick={e => onClick()}>
          <img className={"search-card-platform-icon"} src={iconPath} alt={"User platform icon"}/>
          <span>{props.item.displayName}</span>
      </div>
    );
}
