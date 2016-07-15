"use strict";
var testing_1 = require('@angular/core/testing');
var parenting_utils_component_1 = require('../app/parenting-utils.component');
testing_1.beforeEachProviders(function () { return [parenting_utils_component_1.ParentingUtilsAppComponent]; });
testing_1.describe('App: ParentingUtils', function () {
    testing_1.it('should create the app', testing_1.inject([parenting_utils_component_1.ParentingUtilsAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'parenting-utils works!\'', testing_1.inject([parenting_utils_component_1.ParentingUtilsAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('parenting-utils works!');
    }));
});
//# sourceMappingURL=../parenting-utils.component.spec.js.map