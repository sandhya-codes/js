// const arr1 = [21,2,4,"sdfsdf",[2,5,8]]
// const arra2 = [...arr1,3,6,3]
// console.log(...arra2,0,0,0)

// obj1 = {
//     name : "sandhya",
//     roll : 121,
//     class : 1,
// }

// obj2 = {
//     name : "sandhya1",
//     roll : 109,
//     class : 11,
// }
// const a = {...obj1,obj2}
// console.log(a)


// function add(...nums){
//     return nums
// }
// console.log(add(1,2,4,5))

// const[aa,b,...c] = [1,2,4,5,6,8,9]
// console.log(aa,b,c)


// const { name, ...details } = { name: "Anu" , age: 22 , city: "Hyd" };
// console.log(name);    
// console.log(details); 


// Spread Operator Practice Questions
// Q1: Copy an Array
// Write a function copyArray(arr) that takes an array and returns a new array that is a copy of the original using the spread operator.
 
function copy_array(arr){
    arr1 = [...arr]
    return arr1
}
console.log(copy_array([1,9,3,"asdf",[2,4,6,8]]))

// Q2: Merge Arrays
// Write a function mergeArrays(arr1, arr2) that merges two arrays using the spread operator and returns the result.

function mergeArrays(arr1 ,arr2){
    arr3 = [...arr1,...arr2]
    return arr3
}
console.log(mergeArrays([1,2,4,5],[0,0,0,0]))


// Q3: Copy and Modify an Object
// Given the following object:

// javascript
// Copy code
const user = { name: "John", age: 25 };
// Create a new object with the same properties but add a new property { country: "USA" } using the spread operator.
const obj1 = {...user,country: "USA"}
console.log(obj1)




// Q4: Expand a String into an Array
// Write a function expandString(str) that takes a string and converts it into an array of characters using the spread operator.
// Example:
function expandString(str){
    // str1 = [...str]
    console.log([...str])
    console.log(typeof(str))
}
expandString("sandhya")



// javascript
// // Copy code
// expandString("hello"); // Output: ["h", "e", "l", "l", "o"]
// Q5: Pass Array Elements as Function Arguments
// Write a function sum(a, b, c) that returns the sum of three numbers. Then, use the spread operator to pass an array of numbers [5, 10, 15] into the function.

function sum(...a){
    return a.reduce((b,c)=>b + c)
}
console.log(sum(0,9,7,5,3,2))


