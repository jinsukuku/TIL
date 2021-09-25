// object

let student = {
    name : "jjangu",
    age : 5,
}

console.log(typeof student);
console.log(typeof student.name);

console.log(student['name']);

console.log(student);
console.log(student.name);

// add entity
student.class = "해바라기반";
student.height = 120.6;
console.log(student);

// delete entity
delete student.height;
console.log(student);

// object copy problems
let student_copy = student;
student_copy.name = "yuri";

console.log(student_copy.name);     // yuri
console.log(student.name);          // yuri