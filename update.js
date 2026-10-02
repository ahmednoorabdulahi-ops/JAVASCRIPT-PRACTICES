
// .........HOW TO ADD,REMOVE, UPDATE AMD DELETE OBJECT LIST...

// 1. Create a list of objects

const students = [
    { name: "Ahmed",age:20 },
    { name: "Ali",age:20 },
    { name: "Omar",age:20 }
     
];

console.log(students);

// 2. Add an object — push()

students.push({ name: "Hassan", age: 25});
console.log(students)

// 3. Remove the last object — pop()
students.pop();
console.log(students);

// This removes Hassan, because Hassan is the last object.

// 4. Remove an object by position — splice()
// For example, remove Ali, who is at index 1:

students.splice(1, 1);
console.log(students);

// 5. Delete a property from an object
// If you want to remove a property, rather than the whole object:
const student ={
    name:"Zakaria",
    age:15,
    city:"Nairobi"
}
delete student.city;
console.log(student);

// 2. If you have many students

// Usually, you put the students inside an array of objects:
const newstudents = [
    { name: "Amina", age: 20, city: "Nairobi" },
    { name: "Yusuf", age: 21, city: "Mombasa" },
    { name: "Abdi", age: 22, city: "Nairobi" },
    { name: "Mohamed", age: 19, city: "Kisumu" }
];

console.log(newstudents);

// Each student has an index:

// index 0 → Amina
// index 1 → Yusuf
// index 2 → Abdi
// index 3 → Mohamed

//change Amina CIty ,Because Amina is index 0
newstudents[0].city = "Garissa";
console.log(newstudents);

// find() — find ONE student

// Suppose we have:

const junestudents = [
    { name: "Ahmed", age: 20, grade: 8 },
    { name: "Ali", age: 15, grade: 7 },
    { name: "Hassan", age: 16, grade: 8 },
    { name: "Omar", age: 14, grade: 6 }
];

// Find Hassan
const junestudent = junestudents.find(junestudent =>junestudent.name === "Hassan");
console.log(junestudents)

