console.log("This is my first JS script")
//notation on what data type best represents a value
// data type:format/nature of data 
//variables allow us to store and reference data within a programming script.
//-let keyword (mutable -change) -cons keyword (immutable -no change)
//let number -defines mutable variable
//let number=10:number variable
//const number-10

//PREMITIVE DATA TYPE

let number = 10 //integar variable (number)
let fullname = "Ahmednoor" //string variable (sequence of characters enclosed inside quotes)
let temperature =32.0  // floats (number) -represents decimal notations
let isActive =true //boolean variable = equates to true or false
let undefined_variable //variable that is of the undefined data type
let empty= null //represent value absence for a variable

// NON PREMITIVE DATA TYPES (COLLECTION)

//1.OBJECT DATA TYPE -REPRESENTATION OF KEY AND VALUE PAIRS
 
const student={
    "name" : "Ahmednoor Abdulahi",
    "admissionNo" : 545,
    "course_enrolled": "Software Develpment",
    "is_added_to_lms": false,
    "clubs" : ["simba club", "journalism"]
    
}

//2. ARRAY-LIST (COLLECTION OF SIMILAR OR DIFFERENT ELEMENTS/VALUES)
const fruits=["Apples","banana","Orange"]

console.log(number)
number=20
console.log(number)

//change one item list
fruits[0] = "Mango"
console.log(fruits)

//FUCTIONS IN PROGRAMMING: a block of code that returns a single a value
//.JS arrow fuctions or named fuctions //used to make work modular (reusability)

function add_numbers(a,b){
    return a+b
}
//to call a function use the name of the fuction followed by its brackets :add_number()
console.log(add_numbers (10,20))
console.log(add_numbers (100,200))
console.log(add_numbers (-10,20))
