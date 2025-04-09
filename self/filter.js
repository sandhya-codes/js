Array.prototype.myf = function (callback){
    const result = []

    for(let i = 0;i < this.length;i++){
        if(callback(this[i],i,this)){
            result.push(this[i])
        }
    }
    return result
}

const students = [
    { name: "Aaradhya", marks: 85 },
    { name: "Riya", marks: 32 },
    { name: "Kiran", marks: 56 },
    { name: "Amit", marks: 20 }
  ];
  

const passedstudent = students.myf(function(student){
    return student.marks >= 35
})

console.log(passedstudent)




const num = [12,3,4,5,7]
const filtered = num.myf(function(num){
    return num > 2
})

console.log(filtered)