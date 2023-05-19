let text = 'hkjkvhvjkvv jjuyhiuytguijhb amol 354e55464';
console.log(text.length); 

let text1 = " amol patil";
console.log(text1.toUpperCase());

let text2 = 'amolllhh';
console.log(text2.toLowerCase());

let convertedvalue = text2.toLowerCase();
console.log(convertedvalue);

let text3 = 2000;
//console.log(text3.split('')); not possible
//console.log(text3.toLowerCase()); not possible to apply string methods on number values 

let date = "10+$4-1999 -$5656 kkk$ - 5156 -";
let newdate = date .split('$')
console.log('newdate',newdate);

let fullname = 'amol patil'
let newname = fullname.split(' ');
console.log(newname[0]);

let text4 = 'i live in hh hhyfhjh  jj   nn  nn  nn  kjjjb mumbai';
console.log(text4.length);
let newtext4 = text4.split(' ');
console.log('newtext4',newtext4);
console.log(newtext4.length);
let lastindex = newtext4.length -1;
console.log(newtext4.length - 1);
console.log(newtext4[lastindex]);
console.log(newtext4[0]);


//contact 

let firstname  ='amol';
let middlename ='tanaji'
let lastname ='patil';

let full_name = firstname +' ' +lastname;
let full_name2 = firstname +' '+ middlename + ' ' +lastname;
console.log("full_name",full_name);

let test ='amol tanaji devkar'
let newtest = test.split(' ');
console.log('newtest',newtest);

let newtest2 = newtest[0] +' ' + newtest[newtest.length - 1]
console.log("newtest2",newtest2);

//slice method 

let city = "nashik";
console.log(city.slice(2));

let city2 = "nashikkffff";
console.log(city2.slice(-4));

let city3 ='nashik cksf jcwdkljbcid';
console.log(city3.slice(2,9)); //start index including , end index is exclusive

let city4 = 'nashikj cksf jcwdkljbcid';
console.log(city3.slice(-10,-6));// start index exclusive , end index is including 

let text50 ='amol';
console.log('text50',text50.slice(-13,0));//nothing (0,0)
console.log('text50',text50.slice(-13,3));//(0,3)amol

console.log('text50',text50.slice(0,3));//amo
console.log('text50',text50.slice(3,0));//nothing

//replace()
let test5 = 'jjdbgjdhjhef amol j jn amol jn ';
let test8 = test5.replace("amol", 'anil');//replace will replace first match of value
let test6 = test5.replace(/amol/i, 'anil');
let test7 = test5.replace(/amol/g, 'anil');
console.log('test6',test6);

//search()
var state ='i like maharashtra ,but maharashtra is big state';
console.log(state.search('maharashtra'));//it will check for frist
// match and will return index of it
console.log(state.search('isit'));//-1 search method is case sensitive,
//hence if no match  found it will give us -1
console.log(state.search(/maharashtra/i,));//7

//The search() method matches a string against a regular expression **
//The search() method returns the index (position) of the first match.
//The search() method returns -1 if no match is found.
//The search() method is case sensitive.

//match()
//The match() method returns an array of matches. 
//The search() method returns the position of the first match.

var cars ='i20,i10,jaguar,i20,120 amoli20,ppi20';
console.log(cars.search(/i20/gi));
console.log(cars.match(/i20/gi));

//indexof()
var car = 'i jaguar like jaguar like kkkk like';
console.log(car.indexOf('jaguar'));
console.log(car.indexOf('jagaur'));//-1

//lastindexof()
console.log(car.lastIndexOf('likee'));

//charat()
console.log(car.charAt(3));
console.log(car.charAt(35));

//includes()
//The includes() method returns true if a string contains a specified string.
//Otherwise it returns false.
//The includes() method is case sensitive.

let fav = 'orange color is my fav';
console.log(fav.includes('my'));//true
console.log(fav.includes('My'));//flase

//trim() removes whitespace from both sides of a string 
var favfruit = '  i like   ';

console.log(favfruit.trim());

var favfruit2 = '   i like      '
console.log(favfruit2.trimEnd());

var favfruit3 = '   i like     '
console.log(favfruit3.trimStart());

