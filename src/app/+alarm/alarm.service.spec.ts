/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AlarmService } from './alarm.service';

describe('AlarmService Service', () => {
  beforeEachProviders(() => [AlarmService]);

  it('should ...',
      inject([AlarmService], (service: AlarmService) => {
    expect(service).toBeTruthy();
  }));
});
