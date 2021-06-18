export interface IUserToUserContext {
    isFollowing: boolean
    ignoreStatus: { isIgnored: boolean, ignoreFlags: number }
    globalIgnoreEndDate?: Date
}
