import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { DashboardComponent } from './+dashboard';
import { AlarmComponent } from './+alarm';
import { TurnComponent } from './+turn';
import { TimerComponent } from './+timer';

@Component({
  moduleId: module.id,
  selector: 'parenting-utils-app',
  templateUrl: 'parenting-utils.component.html',
  styleUrls: ['parenting-utils.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
export class ParentingUtilsAppComponent {
  title = 'parenting-utils works!';

  constructor(private router:Router) {}
}
