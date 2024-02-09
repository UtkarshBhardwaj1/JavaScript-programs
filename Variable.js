
//JavaScript keywords: are reserved keywords they identify the js actions 
/*
var- declare a variable(used for old browsers 2015)
let- declare a block variable 
const- declare block constant 
if- marks a block of statements executed on a condition
switch-marks a block of statements to be executed in diff cases
for- for loop
function- declares a function
return- exits a function
try- used far exception handling
*/
//creating variables
var x;
let y;

//using variables
x=45;
y=60;

let z= x+y;
/*
JavaScript Display possibilities
1: innerHTML writing into html element
2: document.write() writing into HTML output 
3: window.alert() writing into alert element
4: console.log() used to display on browser console

*/

console.log("hello")
console.table({john:'this', marks:50})
console.warn('this is warning')
console.error("errror")
var a=45;
a=0
console.log(a)
let num=23
num=40
console.log(num)
let username="utkarsh"
console.log(username)

//JAvaScript values
//1-fixed values called litrals
//2-variable values 

//js litrals numbers anf strings
//js variables atre used to store data values(let, var, const)
 
/* js identifiers are javascript names javaScript is case sensitive
ex-
let username="utkarsh"
here username is identifier 
 we can also use underscore in identifiers as under score is treated as letter 
*/

const pr=5;
//pr=4; this will produce error 
let pr1=9;
var pp=pr+pr1;
console.log(pp)

console.log(+ + "3" + "3")
/*
JavaScript let
variables with let can not redeclared
must declare before use
let variables have block scope(means variables inside{} block can not be accessed from outside) 
*/
/*{ this is block
    let number=55;
}
console.log(number) here this will throw error 
*/

var _first=40;

{
    var _first=10;
}
console.log(_first)// this will print block var _first not the above one

//this problem of redeclaring can be solved using let keyword

let first=77;
{
    let first=7;
}
console.log(first) // this let is the littral of the variable out side the block 
document.writeln("Hello world")
