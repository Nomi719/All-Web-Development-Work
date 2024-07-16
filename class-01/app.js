


//---------------------Advance Js-----------------------
//ES6 
// we use in this variable like this:
//let
//const

// var firstName = "noman"
// console.log("firstName", firstName)

// var firstName = "khan"

//let 

// let firstName = "noman"
// console.log("firstName", firstName)
// firstName = "khan"   //we also reintialize let variable
// console.log("firstName", firstName)


// let name;
// name = "noman"
// console.log("name", name)

// // const
// const appName = "SMIT"  //cant only declare const variable
// appName = "SMIT HELLO"  //cant reintialized const variable
// console.log(appName, "appName")

// const fullName = 0
// console.log(fullName, "fullName")

// ---------------------let, const are blockscope variables--------------------------//


// if( true ){
    // block of code 
// }


// for(){
        // block of code 

// }

// function (){
            // block of code 

// }

//  let age = 23
// let fullName;
// if (true) {
//     fullName = "Jaffar"
// }
// console.log(fullName, "fullName")


// function foo(name){
//     console.log("foo" , name)
// }

// foo("noman")

//arrow function

// const foo = name => {
//     console.log("foo arrow function", name, lastName)
// }


// const foo = (name, lastName) => {
//     console.log("foo arrow function", name, lastName)
// }

// foo("noman", "khan")


// const add = (num1, num2) => {
//     console.log(num1 + num2)
// }


// add(20, 30) //50


// const mul = (num1, num2) => {
//     console.log(num1 * num2)
// }
// mul(20, 30)  // 600



// const foo = _ => { // _ shows parameter is empty
//     console.log("hello world")
// }

// foo()


// function add() {   // norml addition function
//     return 10 + 20
// }


// var result = add()   
// console.log(result)



// const add = () => {
//     return 10 +20
// }


// const add = () => 10 + 30     // if piece of code is one liner then we can remove parameter and block of statment {}


// console.log(add())



// function add(num1, num2) {
//     return num1 + num2
// }


// console.log(add(30, 40))

// const add = (num1, num2) => num1 + num2  //one liner statement


//this


// const obj = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     fullName: function () {
//         console.log(this)
//     }
// }

// obj.fullName()


// const obj = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     fullName: () => {
//         console.log(this)  //it shows whole window in result
//     }
// }

// obj.fullName()


// Object || Array =>  Destructuring


const stdObj = {    // object destructring
    name: "Jaffar",
    age: 23,
}

const { age, name } = stdObj


console.log(stdObj)




console.log(stdObj.age)
var ageM = stdObj.age

console.log(ageM)

const arr = ["karachi", "lahore"]   //array destructuring
const [city1, city2] = arr
console.log(city1)


