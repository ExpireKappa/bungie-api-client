import React, {ReactElement, Component, ChangeEvent, SyntheticEvent} from "react";
import {GeneralUser} from "bungie-api-ts/user";

import "./playerSearch.css"

interface IPlayerSearchState {
    value: string,
    results: Array<ReactElement> | null
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

    filterProfiles(profiles: Array<GeneralUser>) {
        return profiles.filter(profile => profile.blizzardDisplayName || profile.psnDisplayName || profile.xboxDisplayName || profile.stadiaDisplayName || profile.steamDisplayName);
    }

    handleSearch(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    render(): ReactElement {
        return (
            <div className="search-container">
                <div className={"search-form-container"}>
                    <h2>Search for player</h2>
                    <form onSubmit={this.handleSearch}>
                        <input type="text"
                               className={"search-form-input"}
                               placeholder="Player Name"
                               value={this.state.value}
                               onChange={this.handleChange}
                               required/>
                        <button type="submit" className={"search-form-submit"}>Search</button>
                    </form>
                </div>
                <div className={"search-results-container"}>
                    {this.state.results}
                </div>
            </div>
        );
    }
}
