import {getBungieNetUserById, searchUsers} from "bungie-api-ts/user";
import {http} from "../requestBase";

export const SearchUsers = (q: string) => {
    return searchUsers(http, {q: q});
}

export const getUserById = (id: string) => {
    return getBungieNetUserById(http, {id: id});
}
