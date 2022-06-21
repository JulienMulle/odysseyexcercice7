import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skills.models';


@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.scss']
})
export class SkillComponentComponent implements OnInit {
  
  @Input() skills: Skill[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
