//conditional statements are 
//used to perfrom different actions based on different conditions.
//In JavaScript we have the following conditional statements:

//Use if to specify a block of code to be executed, if a specified condition is true
//Use else to specify a block of code to be executed, if the same condition is false
//Use else if to specify a new condition to test, if the first condition is false
//Use switch to specify many alternative blocks of code to be executed

//syntax fo if block
//if(true /false){
//statments (code block)
// }

let a = 20;//assigment operator
let b = 30;

//true
if (a < b) {
    console.log('inside in block');
}

//false 
if (a > b) {
    console.log('inside if block');
}

//syntex for if else block

// if(true){
//    //code
// }
// else{
//    //code
// }

//false
if (a == b) { // == equality operator
    console.log('inside if');
}

else {
    console.log('inside else');
}

//true
if (a < b) {
    console.log('if');
}
else {
    console.log('else');
}

//else if: to check multiple condition we prefer else if condition

//if(false){

//}
//else if(false){

//}
//else if(true){

//}

//else{

//}

if (a > b) {
    console.log("a is greater");
}
else if (a < b) {
    console.log('b is greater ');
}
else if (a == b) {
    console.log('both valuse are same');
}
else {
    console.log(
        'no condition matched '
    );
}

switch (a) {
    case 20:
        console.log('a=10');
        break;
    case 20:
        console.log('a=20');
    case 30:
        console.log('a=30');

    case 40:
        console.log('a=40');
        break;
    case 50:
        console.log('a=50');
    //break;
    default:
        console.log('no match');
        break;
}


