import React, {ReactElement, Component, ChangeEvent, SyntheticEvent} from "react";
import {requestPlayerNames} from "../apiBase";
import {PlayerSearchCard} from "../playerSearchCard/playerSearchCard.component";
import {IUserItem} from "./interfaces/IUserItem";

interface IPlayerSearchState {
    value: string,
    results: any
}

// todo: fill interface out with remaining props
interface UserSearchResponse {
    Response: Array<IUserItem>
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

        requestPlayerNames(this.state.value)
            .then((response: UserSearchResponse) => {
                const searchItems = response.Response.map((item: IUserItem) => <PlayerSearchCard key={item.membershipId} iconPath={item.profilePicturePath} name={item.displayName}/>)
                this.setState({results: searchItems})
            })
    }

    render(): ReactElement {
        return (
            <div className="search-container">
                <form onSubmit={this.handleSearch}>
                    <label>Search for player</label>
                    <input type="text" placeholder="Player Name" value={this.state.value} onChange={this.handleChange}/>
                    <button type="submit">Search</button>
                </form>
                <div>
                    {this.state.results}
                </div>
            </div>
        );
    }
}
