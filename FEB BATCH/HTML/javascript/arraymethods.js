
//tostring() array value, num value
var array1 = ['fruits','cars','bicycles','veggies']
console.log(array1 . length);
console.log(array1);
console.log(typeof(array1));

var stingedItems = array1.toString();
console.log(stingedItems);
console.log(typeof(stingedItems));

//10-4-1992 spilt :o/p = [10,04,1992];
//join()

let date1 = [10,4,1992];
let date2 = date1.join('_');
console.log(date2);
console.log(typeof(date2));

//pop() removes last element from an array and returns it 

let cars =['i10','i20','jaguar','minicup','ertica'];
let newcars = cars.pop();
console.log(newcars);
console.log(cars);

//push()push method is used to add items at the end of array,returns the new array length
let color = ['red','blue','orange','yellow','pink']
color.push('black');
color.push('pista','purple');
console.log(color.push('50','10'));
console.log(color);

//The shift() method removes the first array element and returns it 
// "shifts" all other elements to a lower index.
let num = [10,60,0,30,80,999];
console.log(num.shift());
console.log(num);

//The unshift() method adds a new element to an array (at the beginning), 
//and "unshifts" older elements:

let num2 = [22,10,60,0,30,80,999]
console.log(num2.unshift(87,66));
console.log(num2);

// delete operator : to delete array item/element from a specific index. 
//after deletig it will fill that plce by undefined so lenght of array will reamains unchanged 
let num3 =[60,999,99,9,99,9999,9999,70];
delete num3[1];
console.log(num3);
console.log(num3.length);

//concat()
//the concat() method creates a new array by merging (concatenating) existing arrays:

let num5 =[22,10,60,0,030,80,99]
let num6 =[60,999,99,9,99,9999,9999,70];
let num7 = num5.concat(num6);
console.log(num7);
let num8 = num6.concat(num5);
console.log(num8);
//we can pass multiple arrays to the concat mathod 
 
let no = [20,20,20,30]
let num9 = num5.concat(num6,no);
console.log(num9);

//we can pass array as well as values as parameter to the concat method 

let num10 = num6.concat(no,50,66,99,77,88 );
console.log(num10);
let num11 = num6.concat(no,50,66,99,77,88,'amol',true,'amol');
console.log(num11);

//splice()
//the splice() method can be used to add new items to an array
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items:
let colors1 = ['red','orange','black','blue'];
let colors = colors1.splice(1,1,'pink','purple','brown')//(index,count of no elements to be removed.element/s)
console.log(colors1);
let clr = ['red','orange','black','blue'];
let clr2 = clr.splice(2,1);
console.log(clr);
let no3 = [221,55,66 ,33,88,99,999];
//delete no3[3];
//console.log(no3);
let no4 = no3.splice(3,1);
console.log(no3);
console.log(no4);
let no5 =[221,55,66,33,88,99,999];
let no6 = no5.splice(4,0,100,1000)
console.log(no5);

var vehicles = ['pulser','wego','jupiter','activa'];
vehicles.splice(1,0,'access');
console.log('vehicles1',vehicles);
vehicles.splice(1,0,'i20','i10');
console.log('v2',vehicles);


var items = ['jaguar','minicup','pulser','wego','jupiter','active'];
//items.splice(1,1);//single deletion 
items.splice(1,3)//
console.log(items);

var items2 = ['jaguar','minicup','pulser','wego','jupiter','active'];
items2.splice(1,2,'mango','cherry')
console.log(items2);

//the slice()method slices out a piece of an array. slices (start index inculding, end index: exculding )
const fruits = ["banana","orange","lemon","apple","mango"];
console.log(fruits.slice(2)); 
console.log(fruits.slice(1,4));

//By default, the sort() function sorts values as strings.
//This works well for strings ("Apple" comes before "Banana").
//However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
//Because of this, the sort() method will produce incorrect result when sorting numbers.
//You can fix this by providing a compare function:

const fruits1 = ["banana","orange","lemon","apple","mango"];
let fruit3 = fruits1.sort();
console.log(fruit3);
let revarray = fruit3.reverse();
console.log(revarray);

let no1 = [10,50,500,7,1,30,60];
let no2 = no1.sort();
console.log(no2);



