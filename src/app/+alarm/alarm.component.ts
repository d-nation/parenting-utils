import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { Observable } from 'rxjs/Rx';

import { AlarmService } from './alarm.service';

@Component({
  moduleId: module.id,
  selector: 'app-alarm',
  templateUrl: 'alarm.component.html',
  styleUrls: ['alarm.component.css'],
  directives: [MD_CARD_DIRECTIVES, NgClass],
  providers: [AlarmService]
})
export class AlarmComponent implements OnInit {
  public currentTime: Date;
  public alarmTime: Date;
  public timer: Observable<any>;
  public sleepState: boolean;
  public warningState: boolean;
  public alarmState: boolean;

  private timerAmount: Number;

  constructor(private alarm: AlarmService) {}

  ngOnInit() {
    this.currentTime = new Date();
    this.alarm.init(10, 40);
    this.alarmTime = this.alarm.alarmTime;

    let onTimerTick = this.alarm.timer.subscribe(x => {
      this.currentTime = new Date();
      this.sleepState = this.alarm.normal;
      this.warningState = this.alarm.warning;
      this.alarmState = this.alarm.alarm;
    });
   
  }

}
