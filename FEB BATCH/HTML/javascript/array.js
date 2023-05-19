let city ='pune'

//let city ='pune','mumabi'// not possible

//let cities =[]: epty array:

let cities = ['pune','mumbai','nashik'];//homogenous
console.log(cities);
console.log('2 index--->',cities[2]);
console.log('length', cities.length);
console.log('length of city',cities[2].length);

let arr1 = ['amol',true,100,'patil',2.3];
console.log(arr1);

let arr = ['amol',true,100 ,'patil',2.3, test()]; //hetrogenous
console.log(arr);//error if test ()is not defined 
//function not returning anything ans will be like  ['amol',true,100,'patil',2.3,undefined];

function test(){
    let a = 30; 
    let c = 50;
    return a * c;
   // let b =20;
   //let n =35;
   // res = b+n;
   // console.log(res);
}
// obj {},key:value;
let employee = {}//empty obj;

let students = {
    name:'amol',
    age: 24,
    qulifiction:'msc it',
    mobno:7499572939,
    salaried : true
}
console.log('students',students);
console.log('value--->',students.qulifiction);
console.log('value--->',students.name);
console.log('lenght--->',students.name.length);
console.log('lenght--->',students.mobno.length);//undefined
console.log('students',students.length);//undefined

//array of object
let employee1 =[{},{},{}];//empty array of object

let emp = [
   {
      name :'amol',
      age : 24,
      mobno : 7499572939,
   },
   {
      name :'amit',
      age : 26,
      mobno : 7499572939,
   },
   {
      name :'amol',
      age : 40,
      mobno : 7499572939,
   }
]
console.log('emp',emp);
console.log('emp',emp.length);
console.log('---->',emp[1]);
console.log('---->',emp[1].age);


let test1 = [
   {
      'student':
         [
            {
               name: 'amol'
            },
            {
               age:30
            },
            {
               favfruits :['apple','orange']
            }
         ]

   }
]
console.log(test1);
console.log(test1[0].student[2].favfruits[0]);
console.log(test1[0].student[1].age);

let arranested2 = [
   ['amol','anil',[50,30,['a','b']]]
]
console.log(arranested2);
console.log(arranested2[0][2][2][0]);

arr4 = [[10,50,[100,[60,[30,10]]]]]

console.log(arr4[0][2][1][1][1]);

let arr10 = [10,20,30]
console.log(arr10[0]);

let arr11 = [[10,20,30]]
console.log(arr11[0]);
console.log(arr11[0][0]);

let arr12 = [[10,20,[30,10,[20,10,30]]]];
console.log(arr12[0][2][2][1]);