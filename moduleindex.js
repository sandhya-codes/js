// to import names exports in file use  {}
// import {add , sub} from './modules.js'; //named exports
// console.log(add(10,20))
// console.log(sub(3,10))

// import {a , obj,add,sub} from './modules.js';
// console.log(a)
// console.log(obj)
// console.log(add(2,7))
// console.log(sub(5,9))

// import { addTwonumbers as sum} from "./modules.js"; //alais
// console.log(sum(2,4))

// let str = "   hello world   "
// console.log(str.length)


// import { findreallengthofstring as len } from "./modules.js";
// console.log(len("hello world "))



// only one defult export is allowed for a module
// import findreallengthofstring  from "./modules.js";
// console.log(findreallengthofstring("sandhya"))


// import sub, { add } from './modules.js'
// sub(10,40)
// add(30,20)


// import * as allmodules from './modules.js'
// console.log(allmodules.a)
// console.log(allmodules.default)

// dynamic import
// import("./modules.js")
//     .then(res => {
//         for(let key in res){
//             console.log(res[key])
//         }
//         })
//     .catch(err => console.log(err))

// let modules = await import("./modules.js")
// console.log(modules)


import { validateform } from "./modules.js";
validateform("form" ,"username","password","usermessage")