import {getBungieNetUserById, getMembershipDataById} from "bungie-api-ts/user";
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