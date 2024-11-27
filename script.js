// // Part 1: Understanding and Creating Objects

// Student object
const student = {
    name: "Alice", 
    age: 85,
    enrolled: true,
    courses: ["CPAN 101", "CPAN 102", "CPAN 103"]
};
student.basics = function() {
    const basicInfo = `Student is enrolled: ${this.enrolled}\nStudent courses: ${this.courses}`;
    console.log(basicInfo);
}

console.log("Student name: " + student.name);
console.log("Student age: " + student.age);
student.basics();