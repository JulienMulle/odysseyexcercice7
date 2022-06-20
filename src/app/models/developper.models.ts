import { skill } from "./skills.models";
export class Developper {
    lastName: string;
    firstName: string;
    age: number;
    sexe: string;
    bio: string;
    skills: skill[];
    constructor(lastName: string, firstName: string, age: number, sexe: string, bio: string, skills: skill[]) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.sexe = sexe;
        this.bio = bio;
        this.skills = skills;
    }
}