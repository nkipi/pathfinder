import { Ability } from "./ability";
import { Character } from "./character";
import { Combat } from "./combat";
import { Equipment } from "./equipment";
import { Feat } from "./feat";
import { Save } from "./save";
import { Skill } from "./skill";
import { SpecialAbility } from "./specialAbility";
import { Spell, SpellInfo } from "./spell";
import { SpellLikes } from "./spellLikes";
import { Trait } from "./trait";
import { Weapon } from "./weapon";

export interface Structure {
    character: Character;
    combat: Combat;
    saves: Save[];
    spellInfo: SpellInfo[];
    spells: Spell[];
    abilities: Ability[];
    melee: Weapon[];
    ranged: Weapon[];
    skills: Skill[];
    languages: string[];
    equipment: Equipment[];
    specialAbilities: SpecialAbility[];
    traits: Trait[]; 
    feats: Feat[];
    spellLikes: SpellLikes[];
}