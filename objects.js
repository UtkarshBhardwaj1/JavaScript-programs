//objects is collection of properties in javaScript
//almost everything in javascript is an object
/* 
booleans can be object if defined with new keyword
numbers can be object is defined with new keyword
string can be object if defined with new keyword
dates are always objects
maths are always object


*/
//objects are variables too but object may contain more than one value
/*let person={
    firstname:"kaka", these all are values, they are name and values respectively seprated by colon
    lastname:"harry"
    age:20;
  
    this is how object is created 
    javaScript objects is a collection of named values and these named values are called properties. 

    always use const for the creation of object
}
 */
let student={
firstname:"Utkarsh",
    lastname:"Bhardwaj",
    age:21,
    helloo:"401",
    jj:55
}
student.firstname="Harry";
const user1={
    Name: "Utkarsh",
    Age: 22
};
for (const jj in student) {
    if (Object.hasOwnProperty.call(student, jj)) {
        const element = student[jj];
        console.log("in the loop");
    }
}
console.log(student);

// array is similar to object
// diff is these structures is that in array we only store values, without the associated names(i.e; keys)
const arr=[];
console.log(arr);
console.log(typeof arr);
console.log( arr instanceof Number)
const arr2=[4,2,2,5,2,"s"];
console.log(arr2[5]);
//indexOf used to find index
console.log(arr2.indexOf(2));
//push is used to add element in the last of the array
console.log(arr2.push("sahil"), arr2.length, arr2);
//unshift is used to add element in the very first index of an array
console.log(arr2.unshift(45));
console.log(arr2);
//pop is used to remove element from last index of an array
console.log(arr2.pop());
console.log(arr2);
//shift is used to remove element from 0th index
console.log(arr2.shift());
console.log(arr2);
//reverse is used to reverse the order of an array
console.log(arr2.reverse());
//slice is used to create two arrays from one array,
// in arrguments we have to give start and end(excluded) index of an new array
console.log(arr2.slice(0,4));

const arrArr=[
    [1,2,3,4],
    [
        {
            name:"kaka",
            age:20
    },5,4,"hello"],
    {
            Name: "Utkarsh",
            Age: 22

    }
    ]
console.log(typeof arrArr, arrArr[1][0].name);