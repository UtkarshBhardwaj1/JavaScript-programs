//variables with var are hoisted to the top and can be initialized at any tym

// you can use the variable before it is declared
//hoisting is JavaScript default behavior of moving all declarations to the top of the current scope

first=40;
console.log(first)
var first;

var sec=10;
console.log(sec)

//JavaScript initializations are Not hosited
//js only hoist declarations, not initializations

//using let and const it is not possible to do that well see ex below
//thius will produce error
third=50;
console.log(third)
let third;

//but if we declare let in the top the code will run successfully
let foola;
foola=80;
console.log(foola)

//same in the case of const
//note const does not fix the value but it acctually it fixes the referance of the variable
const five =60;
console.log(five)// this will run properly

console.log(six)
const six=45; //this will throw error
