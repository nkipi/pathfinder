import { Ability } from "./ability";
import { Generic } from "./generic";
import { Character } from "./character";
import { Combat } from "./combat";
import { Equipment } from "./equipment";
import { Feat } from "./feat";
import { Save } from "./save";
import { Sense } from "./sense";
import { Skill } from "./skill";
import { SpecialAbility } from "./specialAbility";
import { Spell, SpellInfo } from "./spell";
import { Trait } from "./trait";
import { Weapon } from "./weapon";
import { Base } from "./base";

export interface FullCharacter {
    character: Character;
    abilities: Ability[];
    saves?: Save[];
    senses?: Sense[];
    combat?: Combat;
    weapons?: Weapon[];
    spellInfo?: SpellInfo[];
    spellLikes?: Base[];
    spells?: Spell[];
    skills: Skill[];
    traits?: Trait[];
    equipment?: Equipment[];
    feats?: Feat[];
    dailyBonuses?: Generic[];
    bonusActions?: Generic[];
    archetype?: Generic[];
    reactions?: Generic[];
    languages?: string[];
    specialAbilities?: SpecialAbility[];
    extras?: any;
}