import { BaseClass } from '@writetome51/base-class';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { insertAt } from '@writetome51/array-insert-at';
import { ITableColumn } from '../../typescript interface libraries/table-column-interface/ITableColumn';


/*************
 This class is for holding data that has been prepped to be displayed in a table.
 It is not specific to any particular GUI, but it does support the re-ordering of columns.
 **************/

export abstract class TableDataService extends BaseClass {

  // public columns: ITableColumn[];
	private __columnBeingMoved: ITableColumn;
	private __columns: ITableColumn[];


	get columns(): ITableColumn[] {
		if (!(this.__columns)) throw new Error('The "columns" property has not been set.');
		return this.__columns;
	}


	set columns(value: ITableColumn[]) {
		errorIfNotArray(value);
		this.__columns = value;
	}


	beginColumnMove(columnIndex): void {
		this.__columnBeingMoved = getAndRemoveByIndex(columnIndex, this.__columns);
	}


	endColumnMove(newIndex): void {
		if (!(this.__columnBeingMoved)) throw new Error('The "__columnBeingMoved" property has not been set.');

		insertAt(newIndex, [this.__columnBeingMoved], this.__columns);
		this.__columnBeingMoved = undefined;
	}


}
