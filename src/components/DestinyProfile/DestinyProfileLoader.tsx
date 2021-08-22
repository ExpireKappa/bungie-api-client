import React, {Component, ReactElement} from "react";
import {ServerResponse} from "bungie-api-ts/common";
import {GeneralUser, UserMembershipData} from "bungie-api-ts/user";
import {GetMembershipDataById, GetUserById} from "../../api/user/api";
import {GetProfile} from "../../api/destiny2/api";
import {DestinyProfile} from "./DestinyProfile";

interface IProfileLoaderProps {
    membershipType: string
    membershipId: string
}

interface IProfileLoaderState {
    bungieProfile: GeneralUser | null
    profileCharacters: any | null;
}

export class ProfileLoader extends Component<IProfileLoaderProps, IProfileLoaderState> {
    private membershipType: number;

    constructor(props: IProfileLoaderProps) {
        super(props);
        this.state = {bungieProfile: null, profileCharacters: null}
        this.membershipType = Number(this.props.membershipType);

    }

    getDestinyCharacters(profile: GeneralUser): void {
        GetMembershipDataById(profile.membershipId, -1).then((response: ServerResponse<UserMembershipData>) => {
            console.log(response);
            if (response.Response.primaryMembershipId !== undefined) {
                GetProfile(response.Response.destinyMemberships[0].membershipType, response.Response?.primaryMembershipId, [200]).then((response: ServerResponse<any>) =>  {
                    console.log(response);
                    if (response.Response.characters.data !== undefined) {
                        this.setState({profileCharacters: response.Response.characters.data})
                    }
                });
            }
        });
    }

    getBungieProfile(): void {
        GetUserById(this.props.membershipId).then((response: ServerResponse<GeneralUser>) => {
            this.setState({bungieProfile: response.Response})
            this.getDestinyCharacters(response.Response);
        })
    }

    componentDidMount() {
        this.getBungieProfile()
    }

    render(): ReactElement {
        if (this.state.bungieProfile && this.state.profileCharacters) {
            return (<DestinyProfile profile={this.state.bungieProfile} characters={this.state.profileCharacters}/>)
        } else {
            return <>
                <p>Loading...</p>
            </>        
        }
    }
}
