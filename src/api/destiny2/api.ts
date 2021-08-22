import {http} from "../requestBase";
import {getProfile, searchDestinyPlayer} from "bungie-api-ts/destiny2";

export const GetProfile = (membershipType: number, destinyMembershipId: string, components: Array<number>) => {
    return getProfile(http, {
        components: components,
        membershipType: membershipType,
        destinyMembershipId: destinyMembershipId
    });
}

export const SearchDestinyPlayer = (membershipType: number, displayName: string, returnOriginalProfile: boolean = false) => {
    return searchDestinyPlayer(http,{
        membershipType: membershipType,
        displayName: displayName,
        returnOriginalProfile: returnOriginalProfile
    });
}
