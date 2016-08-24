import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './+dashboard';
import { AlarmComponent } from './+alarm';
import { TurnComponent } from './+turn';
import { TimerComponent } from './+timer';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'alarm',
    component: AlarmComponent
  },
  {
    path: 'turn',
    component: TurnComponent
  },
  {
    path: 'timer',
    component: TimerComponent
  }
];