


function externeljs(){
    document.getElementById('para').innerHTML = 'amol';
}

//variable:variables are container/value/data holders  
//syntax:
//declaration : let/const/ver(reserved keywords) variablename(e.g.myname,fruit);
//defintion : variablename ='amol';
//defination + defination : let/var/const variablename ='amol';

let myname ; //declrtn
myname = "amol"; //def

let mysurname ='poo00'; //declrtn + def
mysurname ='devkar';
//document.write(<p>mysurname</p>);
document.write(mysurname,' ')

var fruit ;
fruit ='mango';

var fruit1 ='mango';
fruit1='apple';
document.write(fruit1);
//const color; only declrtn with const keyword is not possible 
          //intialiazation/defining/assigning 
          //value to const variable at the time of declation is must
const color ='red';
//color ='pink'; reassigment of value is not possible to a variable having const keyword
console.log('color',color);

//City; with no keyword we can not only declare variable not possible
city ='mumbai';//default keyword in js is var(keyword)
city ='pune';
city ='nashik'
console.log(city);

//difference in let/var/constt
//1.reassingning value to the variable is not possible with const keyword
//possible with let & var;

let num = 50;
num = 100;//possible

var num2 =200;
num2 = 60;//possible

const num3 = 50;
// num3 = 600;//runtime error reassigning value not possible;
 console.log(num3);
 
//2.redeclaration is not possible with let keyword 
let num4;
//let num4; // not possible 

var num5; //possible
var num5; //redeclaration of variable with var keyword is possible

//hoisting  intialise value to the variable and then declare it is not possible wit let keyword
num7 = 20;
//let num7 ;//not possible
console.log(num7);

num8 = 10;
var num8 ; //possible

//let is having block level scope var is having function level scop
//::TODO

function scopediff(){
     
    let a = 10;
    if(true){
       var A = 10;
      let res = a + 10;
      console.log('res>>>>',res);
    }
  console.log('a>>>>>', a);//not possible to access let varible outside the block
}
console.log(scopeDiff());
    
