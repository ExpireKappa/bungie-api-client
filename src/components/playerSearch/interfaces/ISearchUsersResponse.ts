import {IUserItem} from "./IUserItem";

export interface ISearchUsersResponse {
    Response: Array<IUserItem>
    ErrorCode: number
    ThrottleSeconds: number
    ErrorStatus: string
    Message: string
    MessageData: {[key: string]: string}
    DetailedErrorTrace: string
}
