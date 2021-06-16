import { config } from "../dev.config"; // x-api-key value

const domainRoot = "https://www.bungie.net";
const platformRoot = "https://www.bungie.net/Platform";

// User
const searchUsers = "/User/SearchUsers";

export const requestPlayerNames = (searchTerm: string) => {
    return fetch(`${platformRoot}${searchUsers}?q=${searchTerm}`, {method: "GET", headers: {"x-api-key": config.apiKey}})
        .then((response: Response) => {
            if (response.status !== 200) {
                throw new Error("Error searching users")
            }

            return response.json()
        })
};



