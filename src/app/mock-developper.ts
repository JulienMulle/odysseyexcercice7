import { Developper } from "./models/developper.models";
import { skillList } from "./mock-skills";


export const DEVELOPPERLIST: Developper[] = [
    new Developper("Dupont", "Jean", 25, "masculin", "Je suis un développeur", skillList),
    new Developper("L'eponge", "Bob", 25, "masculin", "Je suis un développeur", skillList),
];