import {RequestService} from "./requestService";

// todo: move these const values somewhere more logical

const domainRoot = "https://www.bungie.net";
const platformRoot = "https://www.bungie.net/Platform";

// User
const User_SearchUsers = "/User/SearchUsers";
const User_GetUserById = "/User/GetBungieNetUserById/{id}/";

// Destiny2
const Destiny2_GetProfile = "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/";
const Destiny2_SearchDestinyPlayer = "/Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/";

export const searchUsers = (q: string) => {
    return new RequestService().get(`${platformRoot + User_SearchUsers}`, [["q", q]])
        .then((response: Response) => {
            if (response.status !== 200) {
                throw new Error("Error searching users");
            }

            return response.json();
        })
}

export const getUserById = (id: string) => {
    return new RequestService().get(`${platformRoot + User_GetUserById.replace("{id}", id)}`, [])
        .then((response: Response) => {
            if (response.status !== 200) {
                throw new Error("Error searching users");
            }

            return response.json();
        })
}


// Todo: Maybe move these into a destiny 2 request class?
export const getProfile = (membershipType: number, destinyMembershipId: string) => {
    return new RequestService().get(`${platformRoot + Destiny2_GetProfile.replace("{membershipType}", membershipType.toString()).replace("{destinyMembershipId}", destinyMembershipId)}?components=200`, [])
        .then((response: Response) => {
            if (response.status !== 200) {
                throw new Error("Error searching users");
            }

            return response.json();
        })
}

export const searchDestinyPlayer = (membershipType: number, displayName: string) => {
    return new RequestService().get(`${platformRoot + Destiny2_SearchDestinyPlayer.replace("{membershipType}", membershipType.toString()).replace("{displayName}", displayName)}`, [])
        .then((response: Response) => {
            if (response.status !== 200) {
                throw new Error("Error searching users");
            }

            return response.json();
        })
}
