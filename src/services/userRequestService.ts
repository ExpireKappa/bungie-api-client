import {RequestService} from "./requestService";

// todo: move these const values somewhere more logical

const domainRoot = "https://www.bungie.net";
const platformRoot = "https://www.bungie.net/Platform";

// User
const User_SearchUsers = "/User/SearchUsers";
const User_GetUserById = "/User/GetBungieNetUserById/{id}/";

export const searchUsers = (q: string) => {
    return new RequestService().get(`${platformRoot + User_SearchUsers}`, [["q", q]])
        .then((response: Response) => {
            if (response.status !== 200) {
                throw new Error("Error searching users");
            }

            return response.json();
        })
}
