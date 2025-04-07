// export const add = (a , b) => a + b //namd exports

// export const sub = (a , b) => a - b//namd exports

// export const a = 10;

// export const obj  ={
//     "name" : "sandhya"
// }


// const add = (a , b) => a + b //namd exports

// const sub = (a , b) => a - b//namd exports

// const a = 10;

// const obj  ={
//     "name" : "sandhya"
// }
// export{
//     add,sub,a,obj
// }


// export function addTwonumbers(a,b){
//     return a + b
// }
// export function findreallengthofstring(str){
//     if(typeof str != "string"){
//         throw new TypeError("not valid datatype")
//     }
//     else{
//         return str.trim().length
//     }
// }


// export default  function findreallengthofstring(str){
//     if(typeof str != "string"){
//         throw new TypeError("not valid datatype")
//     }
//     else{
//         return str.trim().length
//     }
// }


// //named export
// export function add(a,b){
//     console.log(a + b)
// }

// //defautlt export
// export default  function sun(a,b){
//     console.log(a - b)
// }


// function add(){
//     console.log("add")
// }

// function sub(){
//     console.log("sub")
// }

// const a = 10
// const obj ={ "name" : "javascript" }

// export default obj

// export {
//     add,sub,a
// }









export function validateform(formid ,userid ,passwordid,usermessageid){
let form = document.getElementById(formid)
let username = document.getElementById(userid)
let password = document.getElementById(passwordid)
let usermessage = document.getElementById(usermessageid)

form.addEventListener("submit",(event)=>{
   let pattern  =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
 
   let name = username.value.trim()
   let pwt = password.value.trim()
   if(name == "" || pwt == ''){
    // console.log("hello world")
    event.preventDefault()
   }
   if(name == '' || !/^[a-zA-Z]+$/.test(name)){
    
    usermessage.innerHTML = (name == '' )?"NO USERNAME" : "ENTER VALID USERNAME"
    username.className = "error"
    event.preventDefault()

   }
   else{
    usermessage.innerHTML = ''
    username.className = ''
   }
   if(pwt == '' || !pattern.test(pwt)){
    password.className = "error"
    event.preventDefault()

   }
   else{
    password.className = ''
   }
})
}