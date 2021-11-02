// first method
let native = {
    name: "",
    gender: "",
    id: "",
    height: "",
    hobby: "",
    age: "",

}
// console.log(native)

// second methods
let native = new Object()
// console.log(native)

// third method
function createObject(name, age, gender, height,hobby){
    this.name = name
    this.age = age
    this.gender = gender
    this.height = height
    this.hobby = hobby
}
let newNative = new createObject("Fatai", "12", "Male", "6ft", "reading")
// console.log(newNative)

// RETIEVAL
// We have 2 methods of retrieving data from an object
// 1: Dot notation
let age = newNative.age
// console.log(age)
// 2: 
let ageb = newNative["age"]
// console.log(age, ageb)

// to update data in object

newNative.age = 13;
let newAge = newNative["age"]
// console.log(newAge)

// deleting data in objects
delete newNative.age;
// console.log(newNative)

// loop through an objects
for( let n in newNative){
    // console.log(n)
}
for(let n in newNative){
    // console.log(newNative[n])

}

// loop
console.log(Object.values(newNative))

// loop

console.log(Object.entries(newNative))

// introduction to this keyword
let cohor8Native = {
    fullname: "name",
    gender: "male",
    height: "short",
    hobby: "fashion",
    getFullname: function(){
        return this.fullname
    }
}
// console.log(cohor8Native.getFullname())

// introduction to bind keyword
let returnFullname = cohor8Native.getFullname.bind(cohor8Native)
console.log(returnFullname)