"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var TestTableDataService = /** @class */ (function (_super) {
    __extends(TestTableDataService, _super);
    function TestTableDataService() {
        var _this = _super.call(this) || this;
        _this.columns = [
            { name: 'id', visible: true, contentOfEachCell: [] },
            { name: 'last name', visible: true, contentOfEachCell: [] },
            { name: 'first name', visible: true, contentOfEachCell: [] },
            { name: 'email', visible: true, contentOfEachCell: [] }
        ];
        return _this;
    }
    return TestTableDataService;
}(index_1.TableColumnDataService));
exports.TestTableDataService = TestTableDataService;
var testTableDataService = new TestTableDataService();
// Test 1: make sure properties are inherited from BaseClass:
if (testTableDataService.className === 'TestTableDataService')
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2: make sure the moving of a column works:
testTableDataService.beginColumnMove(3);
testTableDataService.endColumnMove(0);
if (testTableDataService.columns[0].name === 'email')
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3: make sure the hiding of a column works:
testTableDataService.toggleColumnVisibility('email');
if (testTableDataService.columns[0].visible === false)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4: make sure the showing of a column works:
testTableDataService.toggleColumnVisibility('email');
if (testTableDataService.columns[0].visible === true)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
