// console.log("Hi, Earth!");
console.log("Hi, Earth!");

// Functions in JavaScript
console.log("Functions in JavaScript"); 
console.log("Block of code that performs a specific task, can be invoked whenever required.");

// function declaration
function greet(){
    console.log("Hello, welcome to JavaScript functions!, invocked successfully.");
}
// invoking / calling the function
greet();

// function with parameters
function add(a, b){
    let sum = a + b;
    console.log(`Sum of ${a} and ${b} is ${sum}`);
}
add(5, 10); // invoking the function with arguments 5 and 10
add(20, 30); // invoking the function with arguments 20 and 30

// custom function
let g = 45;
let h = 78;
console.log("This is a custom function!");
function big(c, d){
    let biggest = (c > d) ? c : d;
    console.log(`The biggest number between ${c} and ${d} is ${biggest}`);
}
big(15, 25); // invoking the custom function with arguments 15 and 25
big(125, 50); // invoking the custom function with arguments 125 and 50
big(g,h); // invoking the custom function with variables g and h


let k="=";
function linebreaker(times){
    let line = k.repeat(times);
    console.log(line);
}

// Function with return statement
function multiply(x, y){
    return x * y;
}   
let result1 = multiply(5, 4); // invoking the function and storing the returned value
console.log(`Multiplication result of 5 and 4 is ${result1}`);
let result2 = multiply(10, 3); // invoking the function and storing the returned value
console.log(`Multiplication result of 10 and 3 is ${result2}`);
let result3 = multiply(result1, result2); // invoking the function with previous results through variables
console.log(`Multiplication result of ${result1} and ${result2} is ${result3}`);

// paramerter are local to the function and have block scope 
function localScopeTest(p, q){
    let localVar = p + q;
    console.log(`Inside the function, localVar = ${localVar}`);
}       
localScopeTest(7, 8); // invoking the function with arguments 7 and 8
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined


// Arrow Functions
console.log("Arrow Functions in JavaScript");
// ES6 feature
// shorter syntax for writing functions
// used for non-method functions and simple operations
// does not have its own 'this' context
const square = (n) => {
    return n * n;   // with return statement
}
let sqResult = square(6); // invoking the arrow function
console.log(`Square of 6 is ${sqResult}`);

const multiplyArrow = (g,h) => g * h; // implicit return
let mulResult = multiplyArrow(7, 9);
linebreaker(125);
// practice question
// 1. create a function using the "function" keyword that takes a String as an argument and
// returns the number of vowels in the String.
console.log("Practice Questions");
console.log("1. create a function using the \"function\" keyword that takes a String as an argument and returns the number of vowels in the String.");

 function countVowels(str){
// example: "audio"
    let count = 0;
    let vowels = "aeiouAEIOU";
    
    for(let char of str){
        if (vowels.includes(char)){
            count++;
        }
 }
return count;
 }
    let vowelCount = countVowels("Hello World");
    let vowelCount1 = countVowels("audio");
    console.log(`Number of vowels in "Hello World" is ${vowelCount}`); // 3
    console.log(`Number of vowels in "audio" is ${vowelCount1}`); // 4

// 2. create an arrow function to perform the same task as above (1).
    console.log("2. create an arrow function to perform the same task as above (1).");
    
    const contvow = (str) => {
        let count = 0;
        let vowels = "aeiouAEIOU";  

        for(let char of str){
            if (vowels.includes(char)){
                count++;
            }   
        } 
        return count;
    }

    let vc = contvow("JavaScript");
    let vc1 = contvow("Education");
    console.log(`Number of vowels in "JavaScript" is ${vc}`); // 3
    console.log(`Number of vowels in "Education" is ${vc1}`); // 5
linebreaker(125);
// ====================================================================================================

// forEach loop in Arrays

// ====================================================================================================
// A callback is a function passed as an argument to another function.
console.log("forEach loop in Arrays");
console.log("syntax: arr.forEach(callBackFunction)");
   
// example of forEach loop
let arr = [10, 20, 30, 40, 50]; // array of numbers
arr.forEach(function  printval(val){
    console.log(`Value: ${val}`);
}); // invoking the callback function for each element in the array

arr.forEach((val, index) => {
    console.log(`Index: ${index}, Value: ${val}`);
}   ); // using arrow function as callback
linebreaker(125);
// practice questions
// 1. For a ginven array of numbers, print the square of each value using forEach loop.
console.log("Practice Questions for forEach loop");
console.log("1. For a ginven array of numbers, print the square of each value using forEach loop.");

let num=[2, 4, 6, 12, 10];
num.forEach((val) => {
    console.log(`Square of ${val} is ${val * val}`);
});

let calSq= (val) => {
    console.log(`Square of ${val} is ${val * val}`);
}
num.forEach(calSq);


// ================================================================================================================

// Map function in Arrays methods

// ================================================================================================================
linebreaker(125);
console.log("Map function in Arrays methods");
console.log("syntax: let newArray = arr.map(callBackFunction(val, index, array))");

// difference between forEach and map
// forEach does not return a new array, map returns a new array

 num.map((val) => {
    return val ;
}); // this will not store the result

let squaredArray = num.map((val) => {
    return val * val;
}); // this will store the result in squaredArray

console.log("Original Array: ", num);
console.log("Squared Array using map: ", squaredArray);

// ========================================================================================================================

// filter function in Arrays methods

// ========================================================================================================================
linebreaker(125);
console.log("filter function in Arrays methods");
console.log("The filter() method creates a new array with all elements that pass the test implemented by the provided function.");
console.log("syntax: let newArray = arr.filter(callBackFunction(val, index, array))");

let numEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredArray = numEven.filter((val) => {
    return val % 2 === 0; // condition to filter even numbers
});

console.log("Original Array: ", numEven);
console.log("Filtered Array (Even Numbers) using filter: ", filteredArray);


// ========================================================================================================================

// reduce function in Arrays methods

// ========================================================================================================================
linebreaker(125);
console.log("reduce function in Arrays methods");
console.log("The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.");
console.log("syntax: let result = arr.reduce(callBackFunction(accumulator, currentValue, index, array), initialValue)");

let sumArray = [5, 10, 15, 20, 25];
let sumResult = sumArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // initialValue is 0

console.log("Array to be summed: ", sumArray);
console.log("Sum of all elements using reduce: ", sumResult);

// =========================================================================================================================

// practice questions for map, filter, reduce
// 1. We are given array of marks of students. Filter out the marks of students that scored 90+.
console.log("Practice Questions for map, filter, reduce");
console.log("1. We are given array of marks of students. Filter out the marks of students that scored 90+.");   
let marks = [85, 92, 88, 96, 75, 89, 91];
let highScorers = marks.filter((mark) => {
    return mark >= 90;
});
console.log(marks)

// 2. Take a number an as input from user. Create an array of number from 1 to n. 
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate the product of all numbers in the array.  
console.log("2. Take a number an as input from user. Create an array of number from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate the product of all numbers in the array.");
let n = prompt("enter a number"); // example input
let numberArray = [];   
for(let i = 1; i <= n; i++){
    numberArray.push(i);
}

let sumOfNumbers = numberArray.reduce((acc, curr) => {
    return acc + curr;
}, 0);

let productOfNumbers = numberArray.reduce((acc, curr) => {
    return acc * curr;
}, 1);  

console.log("Array of numbers from 1 to n: ", numberArray);
console.log(`Sum of numbers from 1 to ${n} is: `, sumOfNumbers);
console.log(`Product of numbers from 1 to ${n} is: `, productOfNumbers); 

console.log("Bye, Earth!");
// console.log("Bye, Earth!");