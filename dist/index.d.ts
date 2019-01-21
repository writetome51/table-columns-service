import { BaseClass } from '@writetome51/base-class';


/*************
 This class is for manipulating display table columns.
 Its code doesn't mention any particular GUI.  It supports re-ordering and hiding columns.
 Columns are represented here as an array of column objects.
 **************/

export declare abstract class TableColumnsService extends BaseClass {

	columns: { visible: boolean; }[];
	private __columns;


	moveColumn(oldIndex: number, newIndex: number): void;


	toggleColumnVisibility(columnIndex: number): void;
}
