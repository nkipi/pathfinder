import { FullCharacter } from "../interfaces/fullCharacter";

export function isCharacter(character: FullCharacter, name: string) {
    return (character.character.name).toLowerCase() === name.toLowerCase();
}