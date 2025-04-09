function show(){
    console.log(typeof this)
}
show.call("hello")
show.call("find")
 



function add(a,b){
    return a + b
 }
console.log(add.call(null,3,5)) 
 




const person = {
    fullname : function(){
        return this.firstname
    }
 }

const user = {
    firstname : "fghj",
    lastname : "vbhn"
 }
console.log(person.fullname.call(user))




const user1 = {
    empname : "sandhya",
    empid : 782,
    empsalary : 350000,
    empposition:function(){
        return this.empname+ " "+this.empid+" "+this.empsalary
    }
}

console.log(user1.empposition.call(user1))




const user2 = {
    empname : "sandhya",
    empid : 782,
    empsalary : 350000
}

function per(){
    return this.empid
}
console.log(per.call(user2))