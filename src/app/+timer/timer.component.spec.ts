/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TimerComponent } from './timer.component';
import { TimerService } from './timer.service';

describe('Component: Timer', () => {
  var timerService;
  beforeEach => {
    timerService = new TimerService();
  };
  it('should create an instance', () => {
    let component = new TimerComponent(timerService);
    expect(component).toBeTruthy();
  });
});
