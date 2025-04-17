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