import {searchUsers} from "bungie-api-ts/user";
import {http, send} from "../requestBase";

const platformRoot = "https://www.bungie.net/Platform";

// User
const User_GetUserById = "/User/GetBungieNetUserById/{id}/";

export const SearchUsers = (q: string) => {
    // @ts-ignore - Will fix soontm
    return searchUsers(http, {q: q}).then((response: Response) => {
        if (response.status !== 200) {
            throw new Error("Error searching for users");
        }

        return response.json();
    });
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



