"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_class_1 = require("@writetome51/base-class");
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
var array_insert_at_1 = require("@writetome51/array-insert-at");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
/*************
 This class is for manipulating display table columns.
 Its code doesn't mention any particular GUI.  It supports re-ordering and hiding columns.
 Columns are represented here as an array of column objects.
 **************/
var TableColumnsService = /** @class */ (function (_super) {
    __extends(TableColumnsService, _super);
    function TableColumnsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TableColumnsService.prototype, "columns", {
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
    TableColumnsService.prototype.moveColumn = function (oldIndex, newIndex) {
        var columnBeingMoved = array_get_and_remove_by_index_1.getAndRemoveByIndex(oldIndex, this.__columns);
        array_insert_at_1.insertAt(newIndex, [columnBeingMoved], this.__columns);
    };
    TableColumnsService.prototype.toggleColumnVisibility = function (columnIndex) {
        this.columns[columnIndex].visible = !(this.columns[columnIndex].visible);
    };
    return TableColumnsService;
}(base_class_1.BaseClass));
exports.TableColumnsService = TableColumnsService;
