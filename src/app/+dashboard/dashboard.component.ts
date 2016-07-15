import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [MD_CARD_DIRECTIVES]
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
