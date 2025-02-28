// 1.
// function findLarger(num1,num2,callback){
//     console.log( callback(num1,num2))
//  }
//   findLarger(12,20,(num1,num2)=>{
//      if(num1>num2){
//          return num1+5
//      }
//      return num2+5
//  })
 

//  2.
// function calculate(num1, num2, callback){
//     console.log( callback(num1,num2))
// }
//   calculate(10,5,(num1,num2)=>{
//     if (num1>num2){
//       return (num1+num2)*3
//     }
//     if(num2>num1){
//         return (num2-num1)*3
//     }
//     return 0
// })
 

// 3.
// function checkevenodd(num,callback){
//    if (callback(num)=='even'){
//     return "even number"
//    }
//    return "odd number"
// }
// console.log(checkevenodd(8,(num)=>{
//     if (num%2==0){
//         return 'even'
//     }
//     return 'odd'
// }))


// 4.
// function chesksign(num,callback){
//     return callback(num)+"value"
// }
// var result=chesksign(-10,(num)=>{
//     if (num<0){
//         return 'negative '
//     }
//     if(num>0){
//         return 'positive'
//     }
//     return 0
// })
// console.log(result)


// 5.
// function multiplyconditionally(num1,num2,callback){
//     return callback(num1,num2)
// }
// console.log(multiplyconditionally(4,6,(num1,num2)=>{
//     if(num1 > num2){
//         return num1 * num2*4
//     }
//     if(num2 > num1){
//         return (num1 + num2)*4
//     }
//     return num1*4
// }))


 