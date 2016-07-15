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
var button_1 = require('@angular2-material/button/button');
var grid_list_1 = require('@angular2-material/grid-list/grid-list');
var TurnComponent = (function () {
    function TurnComponent() {
    }
    TurnComponent.prototype.ngOnInit = function () {
        this.choices = [
            { name: 'Mallory', selected: false },
            { name: 'Ellsy', selected: false }
        ];
        var lastSelected = localStorage.getItem('bedtime');
        var selected = this.choices.filter(function (choice) {
            return choice.name === lastSelected;
        });
        if (selected.length) {
            selected[0].selected = true;
        }
    };
    TurnComponent.prototype.toggleChoice = function (index) {
        this.choices[index].selected = !this.choices[index].selected;
        this.deselectOthers(index);
        if (this.choices[index].selected) {
            localStorage.setItem('bedtime', this.choices[index].name);
        }
        else {
            localStorage.removeItem('bedtime');
        }
    };
    TurnComponent.prototype.deselectOthers = function (index) {
        for (var i = 0; i < this.choices.length; i++) {
            if (i !== index) {
                this.choices[i].selected = false;
            }
        }
    };
    TurnComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-turn',
            templateUrl: 'turn.component.html',
            styleUrls: ['turn.component.css'],
            directives: [button_1.MD_BUTTON_DIRECTIVES, grid_list_1.MD_GRID_LIST_DIRECTIVES, common_1.NgClass, common_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], TurnComponent);
    return TurnComponent;
}());
exports.TurnComponent = TurnComponent;
//# sourceMappingURL=../../turn.component.js.map