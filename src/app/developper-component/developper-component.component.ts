import { Component, OnInit } from '@angular/core';
import { Developper } from '../models/developper.models';
import { Skill } from '../models/skills.models';

@Component({
  selector: 'app-developper-component',
  templateUrl: './developper-component.component.html',
  styleUrls: ['./developper-component.component.scss']
})
export class DevelopperComponentComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
    this.setSkills();
    
  }
  public skillSet:Skill[] = [];
    setSkills(): void {
      this.skillSet.push(new Skill("Angular", "https://angular.io/assets/images/logos/angular/angular.svg", "https://angular.io"));
      this.skillSet.push(new Skill("TypeScript", "https://angular.io/assets/images/logos/typescript/typescript.svg", "https://www.typescriptlang.org"));
      this.skillSet.push(new Skill("HTML5", "https://angular.io/assets/images/logos/html5/html5.svg", "https://www.w3.org/html/"));
    }
  public developper: Developper = new Developper("Dupont", "Jean", 25, "j'aime les haricots", "Je suis un développeur", this.skillSet);

}
