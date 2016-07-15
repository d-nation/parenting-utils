import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { Observable } from 'rxjs/Rx';

import { TimerService } from './timer.service';

@Component({
  moduleId: module.id,
  selector: 'app-timer',
  templateUrl: 'timer.component.html',
  styleUrls: ['timer.component.css'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit {
  public currentTime: Date;
  public timerTime: Date;
  public hoursRemaining: number;
  public minutesRemaining: string;

  public sleepState: boolean;
  public warningState: boolean;
  public alarmState: boolean;

  private timerAmount: Number;

  constructor(private timer: TimerService) {}

  ngOnInit() {
    this.currentTime = new Date();
    this.timer.init(1, 5);
    this.timerTime = this.timer.timerTime;

    let onTimerTick = this.timer.timer.subscribe(x => {
      this.hoursRemaining = this.timer.hoursRemaining;
      this.minutesRemaining = this.prefixWithZero(this.timer.minutesRemaining);
      this.sleepState = this.timer.normal;
      this.warningState = this.timer.warning;
      this.alarmState = this.timer.alarm;
    });
   
  }

  prefixWithZero(time) {
    if (time<10) {
      time = '0' + time;
    }

    return '' + time;
  }


}
