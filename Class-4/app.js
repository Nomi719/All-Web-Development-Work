
//spread opt ... three dots ..make copy of arrays

// const arr1 = ["karachi"]
// const arr2 = ["lahore"]
// // const arr3 = [arr1, arr2]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)


// Rest Parameters
// const foo = (firstName, lastName,  ...rest ) => {  /// ...rest in parameter gives remaining values of argument
//     console.log(firstName, lastName, rest)
// }


// foo("jaffar", "aman", 22, "male", "trainer", "web and app" )


// str includes
// const str = "Saylani Mass"  // includes is like true or false if value is there its gives true othrwise false
// console.log(str.includes("Mass"))



// array includes
// const arr1 = ["karachi", "lahore"]
// console.log(arr1.includes("Multan"))
// console.log(arr1.includes("karachi"))



// startWith , endWith // usecase in searching

// const str = "Saylani"
// console.log(str.toLowerCase().startsWith("sayl")) //gives output in true or false => sequence matters


// const str = "Saylani"
// console.log(str.endsWith("ni"))  //output true




// const userName = "Jaffar Aman"
// console.log("old userName", userName)

// // default import
// import email from "./newApp.js"
// console.log("userEmail", email)


// ----------------------import and export only work won live server----------------------------------//

// import { userAge, userEmail, userName } from "./newApp.js"


// console.log(userAge, userEmail, userName)



// import { fruitName, fruitPrice, fruitQuantity } from "./newApp.js";   //imp use .js extention to get result

// console.log(fruitName, fruitPrice, fruitQuantity)

import Name from "./newApp.js";   //take default import name with any time 

console.log(Name);
