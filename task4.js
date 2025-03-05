console.log("1.Create an array with five numbers and print it.")
var a=[11,22,33,44,55]
console.log(a)


console.log("2.Access an Element")
var a=[1,2,3,4,5]
console.log(a[3])


console.log("3.Change an Element")
a[2]=222
console.log(a)


console.log("4.	Find Length")
var a=[1,2,3,4,5,6,7,8]
function arr_Fun(arr1){
    return a.length
}
console.log(arr_Fun(a))


console.log(" 5.Add an Element (Push)")
a.push(12)
console.log(a)


console.log("6.	Remove the Last Element (Pop)")
a.pop()
console.log(a)


console.log(" 7.Loop Through an Array")
// console.log(" ")
var a=[11,22,33,44,55,66,77,88]
for(var i=0;i<=a.length-1;i++){
    console.log(a[i])
}


console.log("8.	Check if an Element Exists")
var a=[1,2,3,4,5,6,7,8,9]
console.log(a.includes(2))

console.log("9.	Copy an Array")
var a=[1,2,3,4,5,6,7,8,9]
b=a.copyWithin()
console.log(b)

console.log("10.Convert Array to String")
a=[1,2,3,4,5,6,7,8]
console.log(a.join(""))

