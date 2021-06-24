import React, {Component, ReactElement} from "react";

import {GeneralUser, UserInfoCard} from "bungie-api-ts/user";
import {ServerResponse} from "bungie-api-ts/common";
import {DestinyProfileResponse} from "bungie-api-ts/destiny2";

import {getUserById} from "../../services/api/user/api";
import {Profile} from "./profile.component";
import {getProfile, searchDestinyPlayer} from "../../services/api/destiny2/api";

interface IProfileLoaderProps {
    membershipId: string
}

interface IProfileLoaderState {
    bungieProfile: GeneralUser | null
    ready: boolean
}

export class ProfileLoader extends Component<IProfileLoaderProps, IProfileLoaderState> {

    constructor(props: IProfileLoaderProps) {
        super(props);
        this.state = {bungieProfile: null, ready: false}

    }

    getDestinyProfile(profile: GeneralUser) {
        let membershipType: number = 0;
        // todo: use bungie provided enum for membership types
        if (profile?.steamDisplayName) {
            membershipType = 3;
        } else if (profile?.psnDisplayName) {
            membershipType = 2;
        } else if (profile?.xboxDisplayName) {
            membershipType = 1;
        }

        if (profile?.displayName) {
            // Todo: type server responses and add some validation
            searchDestinyPlayer(membershipType, profile.displayName).then((response: ServerResponse<Array<UserInfoCard>>) => {
                console.log(response.Response[0].membershipId)
                getProfile(membershipType, response.Response[0].membershipId.toString()).then((response: ServerResponse<DestinyProfileResponse>) => {
                    console.log(response)
                })
            })
        }
    }

    getBungieProfile() {
        getUserById(this.props.membershipId).then((response: ServerResponse<GeneralUser>) => {
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
