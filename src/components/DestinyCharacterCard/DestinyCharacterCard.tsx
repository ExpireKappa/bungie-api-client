import { FunctionComponent } from "react"

interface IDestinyCharacterCardProps {
    character: any;
}

export const DestinyCharacterCard: FunctionComponent<IDestinyCharacterCardProps> = (props) => {
    const getClass = (characterClass: any) => {
        if (characterClass === 1) {
            return "Hunter"
        }
        if (characterClass === 0) {
            return "Titan"
        }
        if (characterClass === 2) {
            return "Warlock"
        }
    }

    const getEmblemUrl = (path: string) => {
        return `https://bungie.net${path}`
    }
    
    return  (
        <div>
            <p>{getClass(props.character.classType)}</p>
            <img alt="Destiny charater emblem" src={getEmblemUrl(props.character.emblemBackgroundPath)}/>
        </div>
    )
}