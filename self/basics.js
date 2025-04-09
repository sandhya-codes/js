
// function sum(a,b,res){
//     res(a,b)
//     return a-b
// }
// const res = (a,b)=>{
//     return a + b
// }
// console.log(sum(5,4,res))

// const mult = (x,y) =>{
//     return x * y
// }
// console.log(mult(4,2))


// const sum1 = function (x,y){
//     return x + y
// }
// console.log(sum1(1,2))


// function sum(a,b,resu){
//     resu(a,b)
//     return a-b
// }
// const resu = function(a,b){
//     return a + b
// }
// console.log(sum(5,4,resu))



// immedietly invocked function


(function(name){
    console.log("hello from IIFE!" + name)
})("sandhya")






// var promise1 = new Promise((resolve,reject)=>{
//     reject("order placed  f")
//     // resolve("hello there")
// })
// // promise1.then(res=>console.log(res))
// // promise1.catch(res=>console.error(res))
// promise1
// .then(res=>console.log(res))
// .catch(err=>console.error(err))

// 
// function getPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("hello world")
//         },5000)
//     })
// }


// getPromise().then(res=>console.log(res)).catch((err)=>console.error(err))

// function add(val){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             reslove(val +50)
//         })
//     })
// }

// function sub(val){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             resolve(val -5)
//         })
//     })
// }
// add(30).then(addres => sub(addres)).then(subres=>console.log(subres))


// Promise.resolve("hello world")
// .then(res => console.log(res))

// function placeOrder(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         // resolve("placed successfully")
//            reject("order is not placed")
//       },2000)
//     })
// }
//  function checkingStock(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("stock is available")
//             // reject("stock is not avaliable")
//         })
//     })
//  }

//  function payment(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         resolve("payment success")
//         // reject("payment failed")
//         },2000);
//     })
//  }

//  function outofDevliver(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("delivered successfully")
//             // reject("delivery is not ")
//             // console.log("delivery")
//         },2000)
//     })
//  }

// placeOrder()
//     .then( res => { console.log(res); return checkingStock() })
//     .then( res => { console.log(res); return payment() })
//     .then( res => { console.log(res); return  outofDevliver() })
//     .then( res => { console.log(res);   })
//     .catch(err => { console.error(err); })



// placeOrder()
// .then(() => checkingStock())
// .then(() => payment())
// .then(() => outofDevliver())




// console.log("customer orderd...")
// function placeOrder( Callback){
//     setTimeout(()=>{
//     Callback(true)
//     },2000)
// }
// function checkingStock( Callback){
//     setTimeout(()=>{
//     Callback(true)
//     },4000)
// }
// function paymentRecived( Callback){
//    setTimeout(()=>{
//     Callback(false)
//    },2000)
// }
// function outofDevliver(Callback){
//     setTimeout(()=>{
//     },1000)
// }
// placeOrder((status)=>{
//    if(status){
//     console.log("order placed")
//     checkingStock((status)=>{
//        if(status){
//         console.log("stock available")
//         paymentRecived((status)=>{
//            if(status){
//             console.log("delivery")
//             console.log("payment recived")
//             outofDevliver()
//            }
//            else{
//             console.log("payment not recivied")
//            }
//         })
//        }else{
//         console.log("stock not available")
//        }
//     })
//    } else{
//     console.log("order not placed")
// }
// })
 


// function sum(a,b,callback1,callback2){
//     console.log(callback1(1,2))
//     console.log(callback2("sandhya"))
//     console.log(a+b)
//     return a-b
// }
//  var res = sum(3,5,function (x,y){
//     console.log(x*y)
//     return x/y
// },(name)=>{
//     console.log(name)
//     return "my "+"name is "+name

// })
// console.log(res)
// arr1=["sandhya",2.4,4,[0,998,765]]
// arr1[2]="write"
// console.log(arr1)
// // delete arr1
// // console.log(arr1)
// let a = new Array(4,7,2,9)
// a.unshift(arr1)
// console.log(a)
// arr1.unshift(a)
// // console.log(a)
// console.log(arr1)
// e=[0,9,8,7,6,5,4]
// a.push(e)
// console.log(a)
// k=["sandhya","kkkk","oiuytr","iuytdcv","bvxdf","bngytd","hjvbm"]
// k.splice(arr1)
// console.log(arr1)

// k={
//     name : "sandhya",
//     id   : "204" ,
//     phno : "75XX"
// }
// console.log(k)
// k["street"] = "video colony"
// console.log(k)
// delete k
// console.log(k)

// function sum(){
//     console.log("sandhya")
//     setTimeout(function(){
//        console.log("hello world!")
//     },2000)
//     console.log("bye...")
//     setTimeout(()=>{
//         console.log("hi again!")
//     },3000)
// }
// sum()
 