import { Base } from "./base";

export interface Skill extends Base {
    classSkill: boolean;
    ranks?: string;
    total: string;
    ability?: string;
    type?: string;
    misc?: string;
}