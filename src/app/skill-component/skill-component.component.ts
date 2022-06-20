import { Component, OnInit, Input } from '@angular/core';
import { skill } from '../models/skills.models';
import { skillList } from '../mock-skills';


@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.scss']
})
export class SkillComponentComponent implements OnInit {
  
  @Input() skillList = skillList;

  constructor() { }

  ngOnInit(): void {
  }

}
