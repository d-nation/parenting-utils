"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var AlarmService = (function () {
    function AlarmService() {
    }
    AlarmService.prototype.init = function (hour, minute) {
        var _this = this;
        this.normal = true;
        this.warning = false;
        this.alarm = false;
        this.currentTime = new Date();
        this.alarmTime = this.setAlarmTime(hour, minute);
        this.timer = Rx_1.Observable.timer(0, 1000);
        var onTimerTick = this.timer.subscribe(function (x) {
            _this.currentTime = new Date();
            _this.checkAlarmTime();
        });
    };
    AlarmService.prototype.setAlarmTime = function (hour, minute) {
        var todayAlarmTime = new Date();
        todayAlarmTime.setHours(hour);
        todayAlarmTime.setMinutes(minute);
        todayAlarmTime.setSeconds(0);
        if (this.currentTime > todayAlarmTime) {
            todayAlarmTime.setDate(this.currentTime.getDate() + 1);
            todayAlarmTime.setHours(hour);
            todayAlarmTime.setMinutes(minute);
            todayAlarmTime.setSeconds(0);
        }
        return todayAlarmTime;
    };
    AlarmService.prototype.checkAlarmTime = function () {
        var FIFTEEN_MINS = 1000 * 60 * 15;
        if (this.currentTime.getTime() >= this.alarmTime.getTime() - FIFTEEN_MINS) {
            this.normal = false;
            this.warning = true;
        }
        if (this.currentTime.getTime() >= this.alarmTime.getTime()) {
            this.normal = false;
            this.warning = false;
            this.alarm = true;
        }
    };
    AlarmService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AlarmService);
    return AlarmService;
}());
exports.AlarmService = AlarmService;
//# sourceMappingURL=../../alarm.service.js.map