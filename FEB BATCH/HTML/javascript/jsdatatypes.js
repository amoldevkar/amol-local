
//javascript has 8t datatypes:
//primitive data types & non-primitive
//primitive data types are number, string, boolean, null, symbol undefined(single value).
 //non-primitive data types is the object (multiple values)
//String.
//Number.
//Bigint.
//Boolean.
//Undefined.
//Null.
//Symbol.\

//Object.

//string: ''""

//let/var/const variable name :datatype =value;
let address ="A-903, NG canary,mumabi";
let address1 = 'A-903, NG canary mumabi';
let num = 20;
  
//typeof operator will return data type of variable.
console.log("address---->",address);
//to know data type varible
console.log("data type of address varible)",typeof(address));
//to know data type value 
console.log(typeof(1000));
console.log(typeof('1000'));

console.log("typeof(num)",typeof(num));

//number
var mob =7499572939;

//to know value of variable mob
console.log('mob value',mob);

//to know data type of mob variable
console.log('data type of mob',typeof(mob));

//Boolean :true/flalse 1/0
let isfavfood = false;
let isfavfood1 = "false";
console.log("value of isfavfood",isfavfood);
console.log("data type of isfavfood varible",typeof(isfavfood));

//undefined
var test ;
console.log(test);
console.log(typeof(test));
let test2 = undefined;

console.log(test2)

//null

var myname = null;
console.log('var myname--->',myname);
console.log('typof', typeof (myname));
console.log('typof--->', typeof (null));
console.log('typof undefined -->',typeof(undefined));

var amount = 12222354444448999;
console.log(amount);
console.log(typeof(amount));

var amount2 =999999999999999999n;
console.log(typeof(amount2));
console.log(amount2);

var amount3 =9999999999999999;
console.log(amount3);
console.log(typeof(amount3));