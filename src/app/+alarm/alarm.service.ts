import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AlarmService {
  private currentTime: Date;
  public alarmTime: Date;
  public normal: boolean;
  public warning: boolean;
  public alarm: boolean;
  public timer: Observable<any>;

  constructor() {}

  public init(hour, minute) {
    this.normal = true;
    this.warning = false;
    this.alarm = false;
    this.currentTime = new Date();
    this.alarmTime = this.setAlarmTime(hour, minute);
    this.timer = Observable.timer(0,1000);

    let onTimerTick = this.timer.subscribe(x => {
      this.currentTime = new Date();
      this.checkAlarmTime();
    });
  }

  private setAlarmTime(hour, minute) {
    let todayAlarmTime = new Date();
    todayAlarmTime.setHours(hour);
    todayAlarmTime.setMinutes(minute);
    todayAlarmTime.setSeconds(0);

    if(this.currentTime > todayAlarmTime) {
      todayAlarmTime.setDate(this.currentTime.getDate() + 1);

      todayAlarmTime.setHours(hour);
      todayAlarmTime.setMinutes(minute);
      todayAlarmTime.setSeconds(0);
    }

    return todayAlarmTime;
  }

  private checkAlarmTime () {
    const FIFTEEN_MINS = 1000 * 60 * 15;

    if(this.currentTime.getTime() >= this.alarmTime.getTime() - FIFTEEN_MINS) {
      this.normal = false;
      this.warning = true;
    } 
    
    if (this.currentTime.getTime() >= this.alarmTime.getTime()) {
      this.normal = false;
      this.warning = false;
      this.alarm = true;
    }
  }
}
