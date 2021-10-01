import {getBungieNetUserById, getMembershipDataById, searchByGlobalNamePrefix} from "bungie-api-ts/user";
import {http} from "../requestBase";

export const GetUserById = (id: string) => {
    return getBungieNetUserById(http, {
        id: id
    });
}

export const GetMembershipDataById = (membershipId: string, membershipType: number) => {
    return getMembershipDataById(http, {
        membershipId: membershipId,
        membershipType: membershipType
    });
} 

export const SearchByGlobalNamePrefix = (name: string, page: number = 0) => {
    return searchByGlobalNamePrefix(http, {
        displayNamePrefix: name,
        page: page
    }).then(response => {
        return response.Response
    }); // Todo: error handling
}