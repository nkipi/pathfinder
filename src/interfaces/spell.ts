import { Base } from "./base";

export interface SpellInfo {
    level: string;
    slots: string;
    known: string;
    dc: string;
}

export interface Spell extends Base {
    level: string;
    school: string;
    status?: string;
}