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
const student={
    firstname:"Utkarsh",
    lastname:"Bhardwaj",
    age:21,
    helloo:"401",
    jj:55
}
student.firstname="Harry";
for (const jj in student) {
    if (Object.hasOwnProperty.call(student, jj)) {
        const element = student[jj];
        console.log("in the loop");
    }
}
console.log(student);