import { BaseClass } from '@writetome51/base-class';
import { ITableColumn } from '../../typescript interface libraries/table-column-interface/ITableColumn';


/*************
 This class is for holding data that has been prepped to be displayed in a table.
 Specifically, it is stored here in an array of objects, where each object represents a column.
 It is not specific to any particular GUI, but it does support the re-ordering of columns,
 and the hiding of columns.
 **************/

export declare abstract class TableColumnDataService extends BaseClass {


	private __columnBeingMoved;
	private __columns;
	columns: ITableColumn[];


	beginColumnMove(columnIndex: any): void;


	endColumnMove(newIndex: any): void;


	toggleColumnVisibility(name: any): void;
}
