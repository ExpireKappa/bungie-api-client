import {FunctionComponent, ReactElement} from "react";
import { useParams } from "react-router-dom";
import {ProfileLoader} from "./profileLoader.component";

export const ProfileWrapper = (): ReactElement => {
    let { membershipId } = useParams<{membershipId: string}>();

    return (
        <ProfileLoader membershipId={membershipId}/>
    );
}
