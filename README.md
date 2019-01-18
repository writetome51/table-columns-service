# TableDataService

An abstract TypeScript/JavaScript class for holding data that has been prepped to be displayed in a table.  
It is not specific to any particular GUI, but it does support the re-ordering of columns.


## Installation

You must have npm installed first. Then, in the command line:

    npm install @writetome51/table-data-service

## Loading

    // if using TypeScript:
    import { TableDataService } from '@writetome51/table-data-service';
    // if using ES5 JavaScript:
    var TableService =  require('@writetome51/table-data-service').TableDataService;
    

## Properties

### columns :  [ITableColumn](https://github.com/writetome51/typescript-base-class#baseclass)[]  (read-writable)

### className : string (read-only)  
##### (Not important. Inherited from BaseClass (see Inheritance Chain below).)


## Methods
```
beginColumnMove(columnIndex): void
    // removes column, identified by index, from this.columns.
    // this.endColumnMove() is intended to be called soon after, during which
    // the removed column is re-inserted in this.columns at a new index.

endColumnMove(newIndex): void
    // re-inserts the column removed during this.beginColumnMove(), at newIndex.
```
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```
protected   _createGetterAndOrSetterForEach(
                  propertyNames: string[],
                  configuration: IGetterSetterConfiguration
            ) : void
     /*********************
     Use this method when you have a bunch of properties that need getter and/or 
     setter functions that all do the same thing. You pass in an array of string 
     names of those properties, and the method attaches the same getter and/or 
     setter function to each property.
     IGetterSetterConfiguration is this object:
     {
         get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function,
             // get_setterFunction takes the property name as first argument and 
             // returns the setter function.  The setter function must take one 
             // parameter and return void.
     
         get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function
             // get_getterFunction takes the property name as first argument and 
             // returns the getter function.  The getter function must return something.
     }
     *********************/ 
   
   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function // takes the result returned by method as an argument.
) : this
```


## Inheritance Chain

TableDataService<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## License
[MIT](https://choosealicense.com/licenses/mit/)