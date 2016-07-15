/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var timer_component_1 = require('./timer.component');
var timer_service_1 = require('./timer.service');
testing_1.describe('Component: Timer', function () {
    var timerService;
    (function (beforeEach) {
        timerService = new timer_service_1.TimerService();
    });
    testing_1.it('should create an instance', function () {
        var component = new timer_component_1.TimerComponent(timerService);
        testing_1.expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=../../timer.component.spec.js.map