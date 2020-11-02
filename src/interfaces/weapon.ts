import { Base } from "./base";

export interface Weapon extends Base{
    attackBonus: string;
    damage: string;
    critical: string;
    type: string;
}