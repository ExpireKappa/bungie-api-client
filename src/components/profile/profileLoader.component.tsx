import React, {Component, ReactElement} from "react";
import {getProfile, getUserById, searchDestinyPlayer} from "../../services/userRequestService";
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

    getDestinyProfile(profile: IUserItem) {
        let membershipType: number = 0;
        if (profile?.steamDisplayName) {
            membershipType = 3;
        } else if (profile?.psnDisplayName) {
            membershipType = 2;
        } else if (profile?.xboxDisplayName) {
            membershipType = 1;
        }

        if (profile?.displayName) {
            searchDestinyPlayer(membershipType, profile.displayName).then((response) => {
                console.log(response.Response[0].membershipId)
                getProfile(membershipType, response.Response[0].membershipId).then((response) => {
                    console.log(response)
                })
            })
        }
    }

    getBungieProfile() {
        getUserById(this.props.membershipId).then((response) => {
            this.setState({bungieProfile: response.Response})
            this.getDestinyProfile(response.Response)
        })
    }

    componentDidMount() {
        this.getBungieProfile()
    }

    render(): ReactElement {
        return (<Profile profile={this.state.bungieProfile}/>)
    }
}
