// nn ss bb uo
/*
two type of data types
primitive  
 String Number Boolean Undefined Null Symbol

refernce
 Object bright

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date*/


//object
const emptyObj={};
console.log({emptyObj}, typeof emptyObj );
const user1={
    Name: "Utkarsh",
    Age: 22
};
const user2={
    Name: "Ajay",
    Age: 23
};
console.log(user1);
console.log(user2.Name);
user1.email="hahaha@gmail.com";
console.log(user1);
delete user1.email;
user2.Age=22;
console.log(user1);
console.log(user2);

//arrays
const arr=[];
console.log(arr);
console.log( arr instanceof Number)

