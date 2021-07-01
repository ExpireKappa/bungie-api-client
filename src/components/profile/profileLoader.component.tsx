import React, {Component, ReactElement} from "react";

import {GeneralUser, UserInfoCard} from "bungie-api-ts/user";
import {ServerResponse} from "bungie-api-ts/common";
import {DestinyProfileResponse} from "bungie-api-ts/destiny2";

import {getUserById} from "../../api/user/api";
import {Profile} from "./profile.component";
import {GetProfile, SearchDestinyPlayer} from "../../api/destiny2/api";

interface IProfileLoaderProps {
    membershipType: string
    membershipId: string
}

interface IProfileLoaderState {
    bungieProfile: GeneralUser | null
    ready: boolean
}

export class ProfileLoader extends Component<IProfileLoaderProps, IProfileLoaderState> {
    private membershipType: number;

    constructor(props: IProfileLoaderProps) {
        super(props);
        this.state = {bungieProfile: null, ready: false}
        this.membershipType = Number(this.props.membershipType);

    }

    getDestinyProfile(profile: GeneralUser) {
        if (profile?.displayName) {
            // Todo: add some validation
            SearchDestinyPlayer(this.membershipType, profile.displayName).then((response: ServerResponse<Array<UserInfoCard>>) => {
                console.log(response.Response[0].membershipId)
                GetProfile(this.membershipType, response.Response[0].membershipId.toString()).then((response: ServerResponse<DestinyProfileResponse>) => {
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
