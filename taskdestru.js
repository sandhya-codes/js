// object destructuring
// task1
// const person = {
//     name : "jhone Doe",
//     age : "30",
//     address : {
//         city : "New York",
//         country : "USA"
//     },
//     hobbies : ["Reading","Traveling"]
// }



// let { name : name_of_person ,age : age_of_person ,address: {city ,contry = "unknown"},hobbies} = person 
// console.log(name_of_person ,age_of_person ,city ,contry )
// let [a] = hobbies
// let firsthobbie = a
// console.log(firsthobbie)




// task2
// const fruits = ["apple" ,"banana" , "mango" , "orange" , "pineapple"]
// let [b,c,...d] = fruits
// let arr = [b,c] 
// [c,b] = arr
// console.log(arr)
 



// task3
// function sum(...k){
//      console.log(k.reduce((a,b) =>a + b))
// }
// sum(1,2,3,4,5)




// task4
// const user = {name : "alice",age:25}
// const job = {title :"developer" , company :"techcorp"}
// let profile = {...user,...job,experience: "2 years"}
// console.log(profile)




// task5
// let n = [1,2,3,4,5]
// let copy = [...n]
// copy[2] = 33
// console.log(n)
// copy[0] = 0

// copy[copy.length-1] = 6
// console.log(copy)


