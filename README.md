# TableColumnsService

An abstract TypeScript/JavaScript class for manipulating display table columns.  
It is not specific to any particular GUI.  It supports the re-ordering of columns, and the 
hiding of columns.


## Installation

You must have npm installed first. Then, in the command line:

    npm install @writetome51/table-columns-service

## Loading

    // if using TypeScript:
    import {  TableColumnsService } from '@writetome51/table-columns-service';
    // if using ES5 JavaScript:
    var  TableColumnsService =  require('@writetome51/table-columns-service').TableColumnsService;
    

## Properties

### columns :  {visible: boolean}[]  (read-writable)

### className : string (read-only)  
##### (Not important. Inherited from BaseClass (see Inheritance Chain below).)


## Methods
```
moveColumn(oldIndex, newIndex): void
    // moves column in this.columns from oldIndex to newIndex.
    
toggleColumnVisibility(columnIndex): void
    // sets column's 'visible' property to the opposite of its current value.
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

 TableColumnsService<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## License
[MIT](https://choosealicense.com/licenses/mit/)