import React, {Component, ReactElement} from "react";
import {getUserById} from "../../services/userRequestService";
import {IUserItem} from "../playerSearch/interfaces/IUserItem";
import {Profile} from "./profile.component";

interface IProfileLoaderProps {
    membershipId: string
}

interface IProfileLoaderState {
    bungieProfile: IUserItem | null
    ready: boolean
}

export class ProfileLoader extends Component<IProfileLoaderProps, IProfileLoaderState> {

    constructor(props: IProfileLoaderProps) {
        super(props);
        this.state = {bungieProfile: null, ready: false}

    }

    getDestinyProfile() {

    }

    getBungieProfile() {
        getUserById(this.props.membershipId).then((response) => {
            this.setState({bungieProfile: response.Response})
        })
    }

    componentDidMount() {
        this.getBungieProfile()
    }

    render(): ReactElement {
        return (<Profile profile={this.state.bungieProfile}/>)
    }
}
