import { TableColumnDataService } from './index';


export class TestTableDataService extends TableColumnDataService {

	constructor() {
		super();

		this.columns = [
			{name: 'id', visible: true, contentOfEachCell: []},
			{name: 'last name', visible: true, contentOfEachCell: []},
			{name: 'first name', visible: true, contentOfEachCell: []},
			{name: 'email', visible: true, contentOfEachCell: []}
		];
	}

}


let testTableDataService = new TestTableDataService();

// Test 1: make sure properties are inherited from BaseClass:
if (testTableDataService.className === 'TestTableDataService') console.log('test 1 passed');
else console.log('test 1 FAILED');

// Test 2: make sure the moving of a column works:
testTableDataService.beginColumnMove(3);
testTableDataService.endColumnMove(0);
if (testTableDataService.columns[0].name === 'email') console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: make sure the hiding of a column works:
testTableDataService.toggleColumnVisibility('email');
if (testTableDataService.columns[0].visible === false) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: make sure the showing of a column works:
testTableDataService.toggleColumnVisibility('email');
if (testTableDataService.columns[0].visible === true) console.log('test 4 passed');
else console.log('test 4 FAILED');