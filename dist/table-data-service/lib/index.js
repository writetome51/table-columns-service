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
var base_class_1 = require("@writetome51/base-class");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
var array_insert_at_1 = require("@writetome51/array-insert-at");
/*************
 This class is for holding data that has been prepped to be displayed in a table.
 It is not specific to any particular GUI, but it does support the re-ordering of columns.
 **************/
var TableDataService = /** @class */ (function (_super) {
    __extends(TableDataService, _super);
    function TableDataService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TableDataService.prototype, "columns", {
        get: function () {
            if (!(this.__columns))
                throw new Error('The "columns" property has not been set.');
            return this.__columns;
        },
        set: function (value) {
            errorIfNotArray_1.errorIfNotArray(value);
            this.__columns = value;
        },
        enumerable: true,
        configurable: true
    });
    TableDataService.prototype.beginColumnMove = function (columnIndex) {
        this.__columnBeingMoved = array_get_and_remove_by_index_1.getAndRemoveByIndex(columnIndex, this.__columns);
    };
    TableDataService.prototype.endColumnMove = function (newIndex) {
        if (!(this.__columnBeingMoved))
            throw new Error('The "__columnBeingMoved" property has not been set.');
        array_insert_at_1.insertAt(newIndex, [this.__columnBeingMoved], this.__columns);
        this.__columnBeingMoved = undefined;
    };
    return TableDataService;
}(base_class_1.BaseClass));
exports.TableDataService = TableDataService;
