// console.log("Hi, Earth!");
console.log("Hi, Earth!");
// Arrays
console.log("Arrays "); 
let arr = [1, 2, 3, 4, 5]; // array of numbers
console.log(arr); // [1, 2, 3, 4, 5]
let marks = [10, 25, 36, 47, 58, 60]; // array of numbers
console.log(marks); // [10, 25, 36, 47, 58, 60]
console.log(marks.length); // 6
let heroes = ["ironman", "spiderman", "thor", "hulk"]; // array of strings
console.log(heroes); // ["ironman", "spiderman", "thor", "hulk"]
// array indices
console.log(heroes[0]); // "ironman"
console.log(heroes[1]); // "spiderman"
console.log(marks[2]); // 36
marks[4] = 100; // change the first element of the array
console.log(marks); // [10, 25, 36, 47, 100, 60]
// loop over an array
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
// for fo loop
for (let i  of heroes) {
    console.log(i);
}
let cities = ["Delhi", "Mumbai", "Bangalore", "Chennai"]; // array of strings
for (let city of cities){
    console.log(city);
    console.log(city.toUpperCase()); // convert to uppercase
}


//practice question 
console.log("Practice Questions");
// 1.fro a given arry with marks of student->[85,97,44,37,76,60] find the average marks of the entire class
let marks1 = [85, 97, 44, 37, 76, 60]; // array of numbers
let sum = 0; // variable to store the sum of marks
for (let i=0; i<marks1.length; i++){
    sum += marks1[i]; 
}
let cavg= sum/marks1.length; 
console.log(`avg marks of class = ${cavg}`); 

// 2.fro a given array with prices of 5 items -> [250,645,300,900,50] all items 
// have an offer of 10% OFF on them. Change the array to store final price after 
// applying offer
let prices = [250, 645, 300, 900, 50]; 
for (let i=0; i<prices.length; i++){
    offer=prices[i]*0.1; 
    prices[i] -= offer; 
}
console.log(`Final prices after offer = ${prices}`);

// array methods
// push(), pop(), shift(), unshift(), splice(), slice(), concat(), join(), indexOf(), lastIndexOf(), reverse(), sort()

// push() - add an element to the end of the array
console.log("Array Methods");
let arr1 = [1, 2, 3, 4, 5]; // array of numbers
console.log(arr1); // [1, 2, 3, 4, 5]
arr1.push(6); // add 6 to the end of the array
console.log(arr1); // [1, 2, 3, 4, 5, 6]
arr1.push(7, 8, 9, "apple"); // add 7, 8, 9, apple to the end of the array
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, "apple"]

// pop() - removes an element from the arry 
let del = arr1.pop(); // remove the last element from the array and store it in 'del'
console.log(arr1); // log the updated array to the console
console.log("deleted element = " + del); // log the deleted element to the console

// concat() - join two arrays
let arr2 = [10, 20, 30]; // array of numbers
console.log("arr2",arr2); // [10, 20, 30]
let arr3 = arr1.concat(arr2); // join arr1 and arr2
console.log("arr3",arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, "apple", 10, 20, 30]

// unshift() - add an element to the beginning of the array
let arr4 = [1, 2, 3, 4, 5]; // array of numbers
console.log(arr4); // [1, 2, 3, 4, 5]
arr4.unshift(0); // add 0 to the beginning of the array
console.log(arr4); // [0, 1, 2, 3, 4, 5]
arr4.unshift(-1, -2, -3); // add -1, -2, -3 to the beginning of the array
console.log(arr4); // [-1, -2, -3, 0, 1, 2, 3, 4, 5]

// shift() - remove the first element from the array
let arr5 = [1, 2, 3, 4, 5]; // array of numbers
console.log(arr5); // [1, 2, 3, 4, 5]
let del1 = arr5.shift(); // remove the first element from the array and store it in 'del1'

// slice() - extract a part of the array
let arr6 = [1, 2, 3, 4, 5]; // array of numbers
console.log(arr6); // [1, 2, 3, 4, 5]
let arr7 = arr6.slice(1, 4); // extract elements from index 1 to 4 (not including 4)
console.log(arr7); // [2, 3, 4]

// splice() - add or remove elements from the array
let arr8 = [1, 2, 3, 4, 5]; // array of numbers
console.log(arr8); // [1, 2, 3, 4, 5]
arr8.splice(2, 1); // remove 1 element from index 2
console.log(arr8); // [1, 2, 4, 5]
arr8.splice(2, 0, 3); // add 3 at index 2
console.log(arr8); // [1, 2, 3, 4, 5]
arr8.splice(5, 0, 6, 7, 8); // add 6, 7, 8 at the end of the array
console.log(arr8); // [1, 2, 3, 4, 5, 6, 7, 8]

// practice question
// 3. create an array to store companies-> "bloomberg", "google", "microsoft", "apple", "amazon"
// a. remove the first company from the array. b.remove microsoft and add "tesla" in its place. c. add "nvidia" at the end of the array. 
 console.log("Practice Questions");
 console.log("3. create an array to store companies-> \"bloomberg\", \"google\", \"microsoft\", \"apple\", \"amazon\"");
 console.log("a. remove the first company from the array. b.remove microsoft and add \"tesla\" in its place. c. add \"nvidia\" at the end of the array.");
let mnc = ["bloomberg", "google", "microsoft", "apple", "amazon"]; // array of strings
 console.log(mnc); // ["bloomberg", "google", "microsoft", "apple", "amazon"]
    mnc.shift(); // remove the first company from the array
    console.log("a:",mnc); // ["google", "microsoft", "apple", "amazon"]
    mnc.splice(1,1,"tesla"); // remove microsoft and add "tesla" in its place
    console.log("b:",mnc); // ["google", "tesla", "apple", "amazon"]
    mnc.push("nvidia"); // add "nvidia" at the end of the array
    console.log("c:",mnc); // ["google", "tesla", "apple", "amazon", "nvidia"]

// console.log("bye, Earth!");
