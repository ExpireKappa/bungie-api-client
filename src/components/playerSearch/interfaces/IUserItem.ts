import {IUserToUserContext} from "./IUserToUserContext";

export interface IUserItem {
    membershipId: number
    uniqueName: string
    normalizedName: string
    displayName: string
    profilePicture: number
    profileTheme: number
    userTitle: number
    successMessageFlags: number
    isDeleted: boolean
    about: string
    firstAccess?: Date
    lastUpdate?: Date
    legacyPortalUID?: number
    context: IUserToUserContext
    psnDisplayName: string
    xboxDisplayName: string
    fbDisplayName: string
    showActivity?: boolean
    locale: string
    localeInheritDefault: boolean
    lastBanReportId?: number
    showGroupMessaging: boolean
    profilePicturePath: string
    profilePictureWidePath: string
    profileThemeName: string
    userTitleDisplay: string
    statusText: string
    statusDate: Date
    profileBanExpire?: Date
    blizzardDisplayName: string
    steamDisplayName: string
    stadiaDisplayName: string
    twitchDisplayName: string
}
