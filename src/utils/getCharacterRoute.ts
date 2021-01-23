export function getCharacterRoute(character: any){
    switch(character.character.name.toLowerCase()) {
        case "zotha": return "zotha";
        case "twinkle toes": return "twinkle";
    }
}