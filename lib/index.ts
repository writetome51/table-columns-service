import { BaseClass } from '@writetome51/base-class';
import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { insertAt } from '@writetome51/array-insert-at';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';


/*************
 This class is for manipulating display table columns.
 Its code doesn't mention any particular GUI.  It supports re-ordering and hiding columns.
 Columns are represented here as an array of column objects.
 **************/

export abstract class TableColumnsService extends BaseClass {

	// public columns: {visible: boolean}[];
	private __columns: { visible: boolean }[];


	get columns(): { visible: boolean }[] {
		if (!(this.__columns)) throw new Error('The "columns" property has not been set.');
		return this.__columns;
	}


	set columns(value: { visible: boolean }[]) {
		errorIfNotArray(value);
		this.__columns = value;
	}


	moveColumn(oldIndex, newIndex): void {
		let columnBeingMoved = getAndRemoveByIndex(oldIndex, this.__columns);
		insertAt(newIndex, [columnBeingMoved], this.__columns);
	}


	toggleColumnVisibility(columnIndex): void {
		this.columns[columnIndex].visible = !(this.columns[columnIndex].visible);
	}


}
