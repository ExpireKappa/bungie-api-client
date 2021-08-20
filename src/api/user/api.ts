import {getBungieNetUserById, getMembershipDataById, searchUsers} from "bungie-api-ts/user";
import {http} from "../requestBase";

export const SearchUsers = (q: string) => {
    return searchUsers(http, {
        q: q
    });
}

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