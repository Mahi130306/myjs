//console.log("Hi, Earth!");
// comments
//console.log("Hi, Earth!");
/*india is my contry
acb acb abc abc*/

//operators
console.log("");

// + - * / % ** ++ --
// arithmetic operators
console.log("arithmetic operators");
console.log("a=2, b=3");
let a = 2, b = 3;
console.log(2 + 3, 'a+b'); //addition
console.log(2 - 3, "a-b"); //subtraction
console.log(2 * 3, "a*b"); //multiplication
console.log(2 / 3, "a/b"); //division
console.log(2 % 3,"a%b"); //modulus (remainder)
console.log(2 ** 3, "a^b"); // 2^3 = 8 
let i = 2;
console.log(i, "i"); // 2
i++; // increment i by 1
console.log(i, "increment"); // 3   
i--; // decrement i by 1
console.log(i, "decrement"); // 2
console.log(++i, "pre-increment"); // 2 + 1 = 3
console.log(--i, "pre-decrement"); // 2 - 1 = 1

console.log("");


//assignment operators
//= += -= *= /= %= **=
console.log("assignment operators");
let x = 10;
console.log(x, "x"); // 10
x += 5; // x = x + 5
console.log(x, "x+=5"); // 15
x -= 5; // x = x - 5
console.log(x, "x-=5"); // 10
x *= 5; // x = x * 5
console.log(x, "x*=5"); // 50
x /= 5; // x = x / 5
console.log(x, "x/=5"); // 10
x %= 5; // x = x % 5
console.log(x, "x%=5"); // 0
x **= 5; // x = x ** 5
console.log(x, "x**=5"); // 0^5 = 0

console.log("");


//comparison operators
// == === != !== > < >= <=
console.log("comparison operators");
let y = 10, z="20";//z is string -> number
console.log(y,z, "y,z"); // 10
console.log(y == 10, "y==10"); // true
console.log(y === z, "y===z"); // false (strict equality)
console.log(y === 10, "y===10"); // true
console.log(y != 10, "y!=10"); // false
console.log(y !== 10, "y!==10"); // false   
console.log(y > z, "10>20"); // false
console.log(y < z, "y<10"); // false       
console.log(y >= z, "y>=10"); // true
console.log(y <= z, "y<=10"); // true

console.log("");

//logical operators
// && || !
console.log("logical operators");
let a1 = true, b1 = false; // boolean values
console.log(a1, b1, "a1,b1"); // true false 
console.log(a1 && b1, "a1&&b1"); // false (AND)
console.log(a1 || b1, "a1||b1"); // true (OR)
console.log(!a1, "!a1"); // false (NOT)
console.log(!b1, "!b1"); // true (NOT)
console.log(a1 && !b1, "a1&&!b1"); // true (AND with NOT)
console.log(a1 || !b1, "a1||!b1"); // true (OR with NOT)
console.log(!a1 && b1, "!a1&&b1"); // false (NOT with AND)
console.log(!a1 || b1, "!a1||b1"); // true (NOT with OR)    
console.log(!a1 && !b1, "!a1&&!b1"); // false (AND)
console.log(!a1 || !b1, "!a1||!b1"); // true (OR)

console.log("");

//conditional statements
//if ifelse else switch case
console.log("conditional statements");
let age1 = 19;
console.log(age1, "age1"); // 19
console.log("if else statement");
if (age1 >= 18) {//if else statement
    console.log("You are an adult."); // true
} else {
    console.log("You are a minor."); // false
}
if (age1 >= 18) {//if else if statement
    console.log("You are an adult."); // true
}
else if (age1 >= 13) {
    console.log("You are a teenager."); // false
} else {
    console.log("You are a child."); // false
}
switch (age1) {//switch case statement
    case 18:
        console.log("You are 18 years old."); // false
        break;
    case 19:
        console.log("You are 19 years old."); // true
        break;
    default:
        console.log("You are not 18 or 19 years old."); // false
        break;
}


//ternary operator
//condition ? true : false
console.log("ternary operator");
let age2 = 17;
console.log(age2, "age2"); // 17
let result = (age2 >= 18) ? "You are an adult." : "You are a minor.";
console.log(result, "result"); // You are a minor.


//switch case with break
console.log("switch case with break");
let day = 3;
console.log(day, "day"); // 3
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//practice question
// get user to input a number using prompt ("enter a number:"). Check if the number is a multiple of 5 or not. 
alert("hello")// one-time popup message
let num = prompt("Enter a number: to check if it is a multiple of 5"); // prompt user for input
console.log(num, "num"); 
if (num%5 == 0)
    console.log("The number is a multiple of 5.") 
else 
    console.log("The number is not a multiple of 5.");

// write a code which can give grades to student according to the marks obtained.
// 90-100 = A+
// 80-89 = A
// 70-79 = B+
// 60-69 = B
// 50-59 = C+
// 40-49 = C
// 33-39 = F+
// 0-32 = F
let marks = prompt("Enter your marks:"); // prompt user for input
console.log(marks, " is the enterd marks");
if (marks >= 90 && marks <= 100) {
    console.log("A+");}
else if (marks >= 80 && marks <= 89) {
    console.log("A");}
else if (marks >= 70 && marks <= 79) {
    console.log("B+");}
else if (marks >= 60 && marks <= 69) {
    console.log("B");}
else if (marks >= 50 && marks <= 59) {
    console.log("C+");}
else if (marks >= 40 && marks <= 49) {
    console.log("C");}
else if (marks >= 33 && marks <= 39) {
    console.log("F+");}
else if (marks >= 0 && marks <= 32) {
    console.log("F");}
else {
    console.log("Invalid marks 0-100");} // invalid marks