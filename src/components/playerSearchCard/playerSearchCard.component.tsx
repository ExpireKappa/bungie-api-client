import React, {FunctionComponent} from "react";
import "./playerSearchCard.css"
import {IPlayerSearchCardProps} from "./interfaces/IPlayerSearchCardProps";

export const PlayerSearchCard: FunctionComponent<IPlayerSearchCardProps> = (props) => {
    const iconPath = `https://www.bungie.net${props.iconPath}`;

    return (
      <div className={"search-card-container"}>
          <img className={"search-card-platform-icon"} src={iconPath} alt={"User platform icon"}/>
          <span>{props.name}</span>
      </div>
    );
}
