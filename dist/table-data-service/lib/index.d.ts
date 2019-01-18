import { BaseClass } from '@writetome51/base-class';
import { ITableColumn } from '../../typescript interface libraries/table-column-interface/ITableColumn';


/*************
 This class is for holding data that has been prepped to be displayed in a table.
 It is not specific to any particular GUI, but it does support the re-ordering of columns.
 **************/

export declare abstract class TableDataService extends BaseClass {

	columns: ITableColumn[];
	private __columns: ITableColumn[];
	private __columnBeingMoved: ITableColumn;


	beginColumnMove(columnIndex: number): void;


	endColumnMove(newIndex: number): void;
}
