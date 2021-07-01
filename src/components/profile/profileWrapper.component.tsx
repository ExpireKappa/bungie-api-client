import {FunctionComponent, ReactElement} from "react";
import { useParams } from "react-router-dom";
import {ProfileLoader} from "./profileLoader.component";

export const ProfileWrapper = (): ReactElement => {
    let { membershipType, membershipId } = useParams<{membershipType: string, membershipId: string}>();

    return (
        <ProfileLoader membershipType={membershipType} membershipId={membershipId}/>
    );
}
