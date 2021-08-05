import { FullCharacter } from "../interfaces/fullCharacter";

export function getCharacterRoute(character: FullCharacter){
    switch(character.character.name.toLowerCase()) {
        case "zotha": return "zotha";
        case "twinkle toes": return "twinkle";
        case "kenna": return "kenna";
    }
}