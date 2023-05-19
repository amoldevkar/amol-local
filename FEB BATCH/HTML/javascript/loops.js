// Different Kinds of Loops
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

//for loop 
//syntax for(let x = 0 (statement); x < value (condition); i++(increament/decrement  operator))

let x = 20;
//x = x +1;
x++;//increament operator
console.log(x);

let y = 20;
//y = y -1;
y--;//decrement operator
console.log(y);

let a = 10;
console.log('a>>',a);
console.log('++a>>',++a);//pre-increment;// first:inc ,then return = 11
console.log('a++>>>',a++);//post increament; //frist return value , then incrm by 1= 11
console.log('a',a);//12

let b = 30;
//b = b -1;
//b--;
console.log(b);
console.log(--b);
console.log(b--);
console.log(b);

let t = 50;
console.log(--t);//49

let p= 40;
console.log(p++);//40
console.log(p);

//1 to 10 initialization(let i = 1;): first time and only once get compiled
//i <= 10 :condition : second time will get compiled it will continued to compile till
for(let i = 1; i <= 10 ; i++){
    //code block
    console.log('i-->',i);
}
for(let i = 0; i < 10 ; i++){
    //code block
    console.log('i-->',i);
}
//for(;;){
//   console.log('pppp');//infinite .looping/apple.crashed
//}

//for(let j = 1;;){
//    console.log(j);//infinite
//}
for(let r = 0; r > 1; r++){
    console.log(r);
}

let cars = ['i10','i20','jaguar','mini cup']
let newcars = [];
for(let car of cars){
    newcars.push(car)
}
console.log('newcars',newcars);

let newcars2 = []
for(let i = 0 ; i <=cars.length; i++){
    newcars2.push(cars[i])
}
console.log( newcars2);

student = 
   {
      name:'amol',
      mob:676676767,
      add:'pune'
   };
   let newstud =[]
for(newitem in student){
    console.log(newitem);
    newstud.push(student[newitem])
}

console.log(newstud);


let newcars1 = [];
let cars1 = ['i10','i20','jaguar','mini cup','swift'];
for(let i = 0 ; i< cars1.length ; i++){
    if(cars[i] !== 'swift'){
        newcars1.push()
    }
}
console.log(newcars1);

let test = ['D','A','A','B','C','D','E','O']//ramove rpeated items from array test 
//let test2 = [...new set(test)];
//console.log(test2);

let test3 = ['D','A'];
for(let i = 0 ; i< test.length ; i++){
//    if(test3.includes(test[i])){

//   }
//   else{
//       test3.push(test[i]);

//   }


   if (test3.includes(test[i])) {
     test3.push(test[i]);
    }
}
console.log('test3',test3);

