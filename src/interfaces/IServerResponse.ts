export interface IServerResponse<T> {
    ErrorCode: number;
    Response: T;
    ThrottleSeconds: number;
    ErrorStatus: string;
    Message: string;
    MessageData: {[key: string]: string}; // interface?
    DetailedErrorTrace: string ;
}
