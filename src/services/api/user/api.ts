import {send} from "../requestBase";
import {HttpClientConfig} from "bungie-api-ts/http";
import {config} from "../../../dev.config";
import {searchUsers} from "bungie-api-ts/user";

// todo: move these const values somewhere more logical

const domainRoot = "https://www.bungie.net";
const platformRoot = "https://www.bungie.net/Platform";

// User
const User_GetUserById = "/User/GetBungieNetUserById/{id}/";

const http = (httpConfig: HttpClientConfig): Promise<any> => {
    const url = new URL(httpConfig.url);
    for (let key in httpConfig.params) {
        url.searchParams.append(key, httpConfig.params[key]);
    }

    return fetch(url.toString(), {
        method: httpConfig.method,
        headers: {
            "x-api-key": config.apiKey
        }
    });
}

export const SearchUsers = (q: string) => {
    // @ts-ignore - Will fix soontm
    return searchUsers(http, {q: q}).then((response: Response) => {
        console.log(response)
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



