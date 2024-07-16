// var 
// let
// const

// var fullName = "noman"  //ways to write a variable
// let fullName = "noman" 
// const fullName = "noman"

//-------------var-----------------------//


// var foo = "foo 1";  //we declare intialize and reintialized a var

// var foo = "foo 2"

// console.log("foo", foo)



//---------------let---------------//

// let foo = "foo 1"  // same as var but cant write a variable with same name in let
// // let foo = "foo 2"
// foo = "foo 2"


// console.log("fullName", foo)


//--------------------const--------------------------------//

// const fullName = "Jaffar Aman"   // const cant be only declare or reintialized
// // fullName = "sufiyan"
// // const name;

// console.log("fullName", name)



// var => function scope
// let, const => block scope


// var fullname = "Jaffar"

// function foo() {
//     fullname = "Jaffar Aman"
//     console.log(fullname)
// }


// console.log(fullname)
// foo()


//  let fullname = "jaffar"

// function foo() {
//     fullname = "Jaffar Aman"
// }

// foo()
// console.log(fullname)



// Arrow function 

// function foo(num1, num2 = 10) {

//     return
// }

// foo(10, 30)


// const foo = () => {
//     console.log("HELLO WORLD")
// }

// foo()
  

// const foo = (num1, num2 = 20) => {
//     console.log("HELLO WORLD", num1 + num2)
// }

// foo(20)


// const foo = _ => {
//     console.log("HELLO WORLD", num1)
// }

// foo(20)

// var arr = ["karachi", "lahore"]

// const [city2, city1, city3,] = arr

// console.log(city1, city2, city3) //city3 is undefind

// var arr = ["karachi", "lahore", "multan"]

// const [city2, city1, city3,] = arr

// console.log(city1, city2, city3) 


// Ternary opt => ``
// Spread Opt => (... Three dots)  // concate method


// const arr1 = ["karachi", "Multan"]
// const arr2 = ["lahore"]

// const arr3 = [arr1 + arr2] //concate method not working



// ES5 basic js

// const arr1 = ["karachi", "Multan"]
// const arr2 = ["lahore"]

// const arr3 = arr1.concat(arr2)

//ES6 methtod advance Js


// const arr1 = ["karachi", "swat"]
// const arr2 = ["lahore"]
// const arr3 = [...arr1 , ...arr2,]

// console.log(arr3)


//concate values

// const obj1 = {
//     firstName: "jaffar"
// }


// const obj2 = {
//     lastName: "aman"
// }



// // const obj3 = obj1  + obj2   //only gives variable name, not working

// const obj3 = { ...obj1, ...obj2 }   // right way or best practice 

// console.log(obj3)


// find ,  findIndex , filter , map , forEach  => Arrays Method



// const value  = arr.find(   function(){}    )
// const arr = ["Karachi", "Lahore", "Multan", "Islamabad"]
// const value = arr.find((value, index, array) => {
//     if (value == "Lahore") {
//         // return true
//         return value
//     }
//     // console.log("value", value)
//     // console.log("index", index)
//     // console.log("array", array)

//     // console.log(value, index);

//     // if (value === "Multan") {
//     //     return true
//     // }
// })


// console.log("value", value)



// const arr = ["Karachi", "Lahore", "Multan", "Islamabad"]
// // find
// // findIndex


// var indexNum = arr.findIndex((value, index) => {
//     // console.log(value, "value")
//     if (value === "Lahore") {
//         return true
//     }
// })
// console.log("indexNum", indexNum)


// var a = 7;
// function hello(){
//     if(true){
//         var a = 5;
//         alert(a)
//     }
// } //7

// var text = "to be or not to be."
// var indx = text.lastIndexOf("be")
// console.log(indx)  //16

// function foo(a, b){
//     alert(b)
// }
// foo(1)  //undefined


// Math.round(7.25)

// function range(length){
//     var a = 5
//     for(var i = 0; i<length; i++){
//         console.log(a)

//     }
// }
// range(3) //5

// var name = "john appleseed"
// var newName = name.slice(5, 10)
// console.log(newName)  //apple


// var size = 5;
// var a = 5;
// var size = 4;
// for(var j=size;j>0; j--){
//     console.log(a)
//     a =a-2
// } //531-1


// var a= 0;
// var b =0;
// while(a<3){
//     a++;
//     b+=1
//     console.log(b)  //123
// }

// function hello(){
//     var a= 10;
// if(a>5){
//     a=7;
// }
// alert(a)
// }

// function average(a,b){
//     return a+b/2;
// }
// console.log(average(2,1))   //2.5

// function printArray(a){
//     var len = a.length;
//     i=0;
//     if(len==0){
//         console.log("empty array")
//      } else{
//         do{
//             console.log(a[i])
//         }
//         while(++i<len)

//         }
    
// }

// var myAray = ["foo", "baz", "bar"]
// myAray.length = 0
// myAray.push("bin")
// console.log(myAray)    //bin


// var arr = [
//     { name: "karachi" },
//     { name: "lahore" },
//     { name: "islamabad" },
// ]
// var newArr = arr.map((value, index) => {
//     console.log(value)
//     return value
// })

// console.log("newArr", newArr)

