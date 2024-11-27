// Part 1: Understanding and Creating Objects


// Student object
const student = {
    name: "Alice", 
    age: 85,
    enrolled: true,
    courses: ["CPAN 101", "CPAN 102", "CPAN 103"],
    basics() {
       console.log(`Student is enrolled: ${this.enrolled}`);
       console.log(`Student courses: ${this.courses}`);
    }
};

console.log("Student name: " + student.name);
console.log("Student age: " + student.age);
console.log(student.basics());