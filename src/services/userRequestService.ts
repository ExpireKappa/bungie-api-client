import {send} from "./requestService";

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
    const url = new URL(`${platformRoot + User_SearchUsers}`);
    url.searchParams.append("q", q);

    return send({method: "GET", url: url})
        .then((response: Response) => {
            if (response.status !== 200) {
                throw new Error("Error searching users");
            }

            return response.json();
        })
}

export const getUserById = (id: string) => {
    const searchUsers = User_GetUserById.replace("{id}", id);
    const url = new URL(`${platformRoot + searchUsers}`);

    return send({method: "GET", url: url})
        .then((response: Response) => {
            if (response.status !== 200) {
                throw new Error("Error searching users");
            }

            return response.json();
        })
}


// Todo: Maybe move these into a destiny 2 request class?
export const getProfile = (membershipType: number, destinyMembershipId: string) => {
    const getProfile = Destiny2_GetProfile.replace("{membershipType}", membershipType.toString())
                                          .replace("{destinyMembershipId}", destinyMembershipId);
    const url = new URL(`${platformRoot + getProfile}`);
    url.searchParams.append("components", "200");

    return send({method: "GET", url: url})
        .then((response: Response) => {
            if (response.status !== 200) {
                throw new Error("Error searching users");
            }

            return response.json();
        })
}

export const searchDestinyPlayer = (membershipType: number, displayName: string) => {
    const searchDestinyPlayer = Destiny2_SearchDestinyPlayer.replace("{membershipType}", membershipType.toString())
        .replace("{displayName}", displayName);
    const url = new URL(`${platformRoot + searchDestinyPlayer}`);

    return send({method: "GET", url: url})
        .then((response: Response) => {
            if (response.status !== 200) {
                throw new Error("Error searching users");
            }

            return response.json();
        });
}
