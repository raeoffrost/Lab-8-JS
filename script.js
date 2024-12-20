// Part 1: Understanding and Creating Objects

//  Create an object to represent a student
const student = {
    name: "Alice", 
    age: 85,
    enrolled: true,
    courses: ["CPAN 101", "CPAN 102", "CPAN 103"]
};
student.basics = function() {
    const basicInfo = `Student is enrolled: ${this.enrolled}\nStudent courses: ${this.courses.join(', ')}`;
    console.log(basicInfo);
}
// Use console.log to output
console.log("Student name: " + student.name);
console.log("Student age: " + student.age);
student.basics();

// Part 2: Working with JSON

// Convert the student object into a JSON string + Log
const studentString = JSON.stringify(student);
console.log(studentString);

// Convert the JSON string to obj + Log
const studentObj = JSON.parse(studentString);
console.log(studentObj);
//compare to original
console.log(student);

// Part 3: Using Destructuring Assignment
// extract the name and courses from the student object
const {name, courses} = student;
// Create an array of scores
const scores = [85, 92, 78, 90];
// Destructure the first two scores
let [scores0, scores1] = scores;
// log to the console
console.log(`Initial two scores: ${scores0}, ${scores1}`);

// Part 4: The Spread Operator
// Clone the student object
const studentClone = {...student};
// Add a new property + log
studentClone.gradYear = 2030;
console.log(studentClone.gradYear);

// merge 2 arrays

const newCourses = [ ...student.courses, "CPAN 201", "CPAN 202", "CPAN 203"];
console.log(newCourses);

// Part 5: Object Methods

// method add a new course 
student.addCourse = function(course){
    student.courses.push(course);
}
student.addCourse("CPAN 301");
console.log(student.courses);

// method total number of courses
student.courseLoad = function(){
    return student.courses.length;
}
console.log(student.courseLoad());

// Bonus Task

// Use reduce to calculate the average score

// add score values with reduce then divide by array length and round for readability
const averageScore = Math.round(scores.reduce(
    (scoreA, scoreB) => (scoreA + scoreB))/scores.length);
console.log("Average Grade: " + averageScore + "%");