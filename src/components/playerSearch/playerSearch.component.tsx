import React, {ReactElement, Component, ChangeEvent, SyntheticEvent} from "react";
import {IUserItem} from "./interfaces/IUserItem";
import {ISearchUsersResponse} from "./interfaces/ISearchUsersResponse";
import {PlayerSearchCard} from "../playerSearchCard/playerSearchCard.component";
import {searchUsers} from "../../services/userRequestService";

import "./playerSearch.css"

interface IPlayerSearchState {
    value: string,
    results: any
}

export class PlayerSearch extends Component<{ }, IPlayerSearchState> {
    constructor(props: { }) {
        super(props);
        this.state = {results: null, value: ""}

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.target.value})
    }

    handleSearch(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        searchUsers(this.state.value)
            .then((response: ISearchUsersResponse) => {
                const searchItems = response.Response.map((item: IUserItem) => <PlayerSearchCard key={item.membershipId} iconPath={item.profilePicturePath} name={item.displayName}/>)
                this.setState({results: searchItems})
            })
    }

    render(): ReactElement {
        return (
            <div className="search-container">
                <div className={"search-form-container"}>
                    <h1>Search for player</h1>
                    <form onSubmit={this.handleSearch}>
                        <input type="text" placeholder="Player Name" value={this.state.value} onChange={this.handleChange}/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div className={"search-results-container"}>
                    {this.state.results}
                </div>
            </div>
        );
    }
}
