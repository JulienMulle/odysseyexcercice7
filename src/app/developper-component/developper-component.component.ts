import { Component, OnInit } from '@angular/core';
import { DEVELOPPERLIST } from '../mock-developper';

@Component({
  selector: 'app-developper-component',
  templateUrl: './developper-component.component.html',
  styleUrls: ['./developper-component.component.scss']
})
export class DevelopperComponentComponent implements OnInit {
  
  developperList = DEVELOPPERLIST;
  constructor() { }

  ngOnInit(): void {
    this.developperList = DEVELOPPERLIST;
  }

}
