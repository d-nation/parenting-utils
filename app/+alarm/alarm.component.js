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
var common_1 = require('@angular/common');
var card_1 = require('@angular2-material/card/card');
var alarm_service_1 = require('./alarm.service');
var AlarmComponent = (function () {
    function AlarmComponent(alarm) {
        this.alarm = alarm;
    }
    AlarmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentTime = new Date();
        this.alarm.init(10, 40);
        this.alarmTime = this.alarm.alarmTime;
        var onTimerTick = this.alarm.timer.subscribe(function (x) {
            _this.currentTime = new Date();
            _this.sleepState = _this.alarm.normal;
            _this.warningState = _this.alarm.warning;
            _this.alarmState = _this.alarm.alarm;
        });
    };
    AlarmComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-alarm',
            templateUrl: 'alarm.component.html',
            styleUrls: ['alarm.component.css'],
            directives: [card_1.MD_CARD_DIRECTIVES, common_1.NgClass],
            providers: [alarm_service_1.AlarmService]
        }), 
        __metadata('design:paramtypes', [alarm_service_1.AlarmService])
    ], AlarmComponent);
    return AlarmComponent;
}());
exports.AlarmComponent = AlarmComponent;
//# sourceMappingURL=../../alarm.component.js.map