// let print=prompt("Enter text you want to print 10 times");

// for(i=1;i<=10;i++){
//     document.writeln(print)

// }

let student={
    firstname:"Utkarsh",
    lastname:"Bhardwaj",
    age:21,
    helloo:"401",
    jj:55
}
student.firstname="Harry";
for (let jj in student) {
    if (Object.hasOwnProperty.call(student, jj)) {
        let element = student[jj];
        console.log("in the loop");
    }
} console.log(student)



for (const Bhardwaj
     of student) {
    console.log("Running forof loop")
    
}
while (condition) {
    
}



do {
    
} while (condition);