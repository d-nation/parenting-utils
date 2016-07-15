import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ParentingUtilsAppComponent } from '../app/parenting-utils.component';

beforeEachProviders(() => [ParentingUtilsAppComponent]);

describe('App: ParentingUtils', () => {
  it('should create the app',
      inject([ParentingUtilsAppComponent], (app: ParentingUtilsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'parenting-utils works!\'',
      inject([ParentingUtilsAppComponent], (app: ParentingUtilsAppComponent) => {
    expect(app.title).toEqual('parenting-utils works!');
  }));
});
