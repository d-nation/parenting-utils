import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { DashboardComponent } from './+dashboard';
import { AlarmComponent } from './+alarm';
import { TurnComponent } from './+turn';
import { TimerComponent } from './+timer';

@Component({
  selector: 'parenting-utils-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  
}
