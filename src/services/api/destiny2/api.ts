import {send} from "../requestBase";

const platformRoot = "https://www.bungie.net/Platform";

const Destiny2_GetProfile = "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/";
const Destiny2_SearchDestinyPlayer = "/Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/";

export const getProfile = (membershipType: number, destinyMembershipId: string) => {
    const getProfile = Destiny2_GetProfile.replace("{membershipType}", membershipType.toString())
        .replace("{destinyMembershipId}", destinyMembershipId);
    const url = new URL(`${platformRoot + getProfile}`);
    url.searchParams.append("components", "200");

    return send({method: "GET", url: url});
}

export const searchDestinyPlayer = (membershipType: number, displayName: string) => {
    const searchDestinyPlayer = Destiny2_SearchDestinyPlayer.replace("{membershipType}", membershipType.toString())
        .replace("{displayName}", displayName);
    const url = new URL(`${platformRoot + searchDestinyPlayer}`);

    return send({method: "GET", url: url});
}
