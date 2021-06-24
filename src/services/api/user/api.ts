import {getBungieNetUserById, searchUsers} from "bungie-api-ts/user";
import {http} from "../requestBase";

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
    // @ts-ignore - will fix soontm
    return getBungieNetUserById(http, {id: id}).then((response: Response) => {
        if (response.status !== 200) {
            throw new Error("Error searching for users");
        }

        return response.json();
    });
}
