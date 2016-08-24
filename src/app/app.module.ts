import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

import {MdButtonModule} from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';

import { DashboardComponent } from './+dashboard';
import { AlarmComponent } from './+alarm';
import { TurnComponent } from './+turn';
import { TimerComponent } from './+timer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlarmComponent,
    TurnComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
