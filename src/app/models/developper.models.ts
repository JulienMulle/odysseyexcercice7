import { Skill } from "./skills.models";

export class Developper {
    constructor(
        public lastName: string,
        public firstName: string,
        public age: number,
        public sexe: string,
        public bio: string,
        public skills: Skill[])
        {}
}