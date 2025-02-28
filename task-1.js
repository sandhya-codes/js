// 1st question
// Arrow function in js
// the function which does not have function keyword and the function name denoted by "=>" is knows as arrow function.
// named function 
// syntax:
// function function name(parameters){
//                           statements
//                         }
//                         functionname(arguments)

// syntax for arrow function:
// (parameters)=>{
//     statements
// }
// function functionname(parameters,arrowfunction){
//     statements
// }
// functionname(arguments)


// 2.
var num=(a,b)=>"a+b"
num()


// 3.
var square= n =>"n*n"


// 4.
// if arrow function have single parameter then no need of parantheses "()"
var demo =a=>console.log(a+10)
demo(10)


// 5.
// 1. Implicit Return
// If the function body contains a single expression, the result of that expression is automatically returned.
// No need to use the return keyword.
const add = (a, b) => a + b;  
console.log(add(2, 3));
 // Output: 5

// 2. Explicit Return
// If the function has multiple statements or uses curly braces {}, you must explicitly use the return keyword.
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(2, 3));
 // Output: 6


//  6.
// var num=(a,b)=>"b-a"
// num(8,7)

// 7.
var num=()=>"hello world!"
console.log(num())














// function processnumber(num1,num2,callbackfun){
//     console.log(num1,num2)
//     return callbackfun(num1,num2)
// }
// var result=processnumber(3,4,function(a,b){
//     console.log(a,b)
//     return a+b
// })
// console.log("sum:",result)
 
//  var demo =function(){
//     console.log("hello")
//  }
//  console.log(demo())

// function sum(a,b,callbackfun){
//     console.log(callbackfun(2,3))
//     console.log("sum",res)
//     console.log(a-b)
// }
// sum(1,3,function(x,y){
//     res=console.log(x+y) 
    
// })