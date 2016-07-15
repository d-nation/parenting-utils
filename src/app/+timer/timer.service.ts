import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TimerService {
  private currentTime: Date;
  public timerTime: Date;
  public normal: boolean;
  public warning: boolean;
  public alarm: boolean;
  public hoursRemaining: number;
  public minutesRemaining: number;
  public timer: Observable<any>;

  constructor() {}

  public init(hour, minute) {
    this.normal = true;
    this.warning = false;
    this.alarm = false;
    this.currentTime = new Date();
    this.timerTime = this.setTimerTime(hour, minute);
    this.timer = Observable.timer(0,1000);

    let onTimerTick = this.timer.subscribe(x => {
      this.currentTime = new Date();
      this.checkTimerTime();
    });
  }

  private setTimerTime(hour, minute) {
    let timerLength = ((hour * 3600) + (minute * 60)) * 1000;
    let timerTime = new Date(this.currentTime.getTime() + timerLength);

    return timerTime;
  }

  private checkTimerTime () {
    const FIFTEEN_MINS = 1000 * 60 * 15;
    let minuteDiff = (this.timerTime.getTime() - this.currentTime.getTime()) / 60000;

    this.hoursRemaining = Math.floor(minuteDiff / 60);
    this.minutesRemaining = Math.floor(minuteDiff - (this.hoursRemaining * 60));

    if(this.currentTime.getTime() >= this.timerTime.getTime() - FIFTEEN_MINS) {
      this.normal = false;
      this.warning = true;
    } 
    
    if (this.currentTime.getTime() >= this.timerTime.getTime()) {
      this.normal = false;
      this.warning = false;
      this.alarm = true;
    }
  }
}
