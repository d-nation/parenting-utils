"use strict";
var router_1 = require('@angular/router');
var _dashboard_1 = require('./+dashboard');
var _alarm_1 = require('./+alarm');
var _turn_1 = require('./+turn');
var _timer_1 = require('./+timer');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_1.DashboardComponent
    },
    {
        path: 'alarm',
        component: _alarm_1.AlarmComponent
    },
    {
        path: 'turn',
        component: _turn_1.TurnComponent
    },
    {
        path: 'timer',
        component: _timer_1.TimerComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=../app.routes.js.map