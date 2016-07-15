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
var timer_service_1 = require('./timer.service');
var TimerComponent = (function () {
    function TimerComponent(timer) {
        this.timer = timer;
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentTime = new Date();
        this.timer.init(1, 5);
        this.timerTime = this.timer.timerTime;
        var onTimerTick = this.timer.timer.subscribe(function (x) {
            _this.hoursRemaining = _this.timer.hoursRemaining;
            _this.minutesRemaining = _this.prefixWithZero(_this.timer.minutesRemaining);
            _this.sleepState = _this.timer.normal;
            _this.warningState = _this.timer.warning;
            _this.alarmState = _this.timer.alarm;
        });
    };
    TimerComponent.prototype.prefixWithZero = function (time) {
        if (time < 10) {
            time = '0' + time;
        }
        return '' + time;
    };
    TimerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-timer',
            templateUrl: 'timer.component.html',
            styleUrls: ['timer.component.css'],
            providers: [timer_service_1.TimerService]
        }), 
        __metadata('design:paramtypes', [timer_service_1.TimerService])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;
//# sourceMappingURL=../../timer.component.js.map