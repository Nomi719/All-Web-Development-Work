
// Find, findindex, filter, map, foreach => Arays method

// find 
 //-----we usse find method to find only one thing in whole aray----------//

// var arr = ["karachi", "lahore", "islamabad"]

// const findCity = arr.find((value, index)=>{
//     // console.log(value, index)
//     // return false
//     if(value == "lahore"){
//         return true
//     }
// })
// console.log(findCity)

// findindex

///-------------findindex gives the index no. of a item-------//

// var arr = [               //array of object
//     { name: "karachi" },
//     { name: "lahore" },
//     { name: "islamabad" },
// ]
// const findCity = arr.findIndex((value, index) => {
//     // console.log(value, index)
//     if (value.name == "lahore") {
//         return true
//         }
//         })
//         console.log(findCity)


// var arr = ["karachi", "lahore", "islamabad"]
// const findCity = arr.findIndex((value, index) => {
//     // console.log(value, index)
//     if (value == "karachi") {
//         return true
//         }
//         })
//         console.log(findCity)




// array map method 
  // map method is used to change the value of an array
  //ES5 method


// var arr = [2, 4, 6, 8, 10]
// var tempArr = []
// for (var i = 0; i < arr.length; i++) {
//     tempArr.push(arr[i] * 2)

// }

// // console.log(arr)
// console.log(tempArr)

// var arr = [
//     {name:" pakistan"},
//     {name: "india"},
//     {name: "china"},
//     {name: "japan"},
// ]
// var tempArr = arr.map((value, index) => {
//     console.log(value)
//     return value.name
//     })
//     console.log(tempArr)


// filter array 

// var arr = [8, 2, 4, 8, 6, 8, 8, 10]
// var tempArr = arr.filter((value, index) => {
//     console.log(value, index)
//     if(value == 8){
//         return value
//     }
//     })

//     console.log(tempArr)


// for each

// for each give every value in the Array

//  var arr = [1, 11, 113, 8, 2, 4, 8, 6, 8, 8, 10]
//  var tempArr = []
//  const value = arr.forEach((value, index)=>{
//     console.log(value, index)
//     arr[index] = value*2
//     if(value % 2 ==0){
//         tempArr.push(value)
//     }
//     })
//     // console.log("value", value)
//     console.log(tempArr)

// Js uses sync function mean line by line
// Js uses async method when any delay occur or login reqst requird it wait there 

// // Promises  or async method
// 1
// 2
// 3
// // 4 ==> login request 
// 5
// 6
// 7
// 8
// 9

// const loginPromise = new Promise((resolve, reject) => {
//     var requestLogin = false
//     if (requestLogin) {
//         resolve("Login successfully")
//     } else {
//         reject("something went wrong!")
//     }



// })
// .then((success)=>console.log(success , "then"))
// .catch((error)=> console.log(error , "catch"))



// console.log(loginPromise)


// const newAssignment = new Promise((resolve, reject)=>{
//     var newAssignment = false
//     if(newAssignment){
//         resolve("new assignment is done")
//         }else{
//             reject("program to warr gya")
//             }
// })
// .then((success)=>console.log(success , "then"))
// .catch((error)=> console.log(error , "catch"))


//---------------------------CLASS-04--------------------------------//

// 1
// 2
// 3 => login   js check and move forward if async not here //Js is interpretor language
// 4 => dependent login

// 1
// 2
// 3 => login ==> async   // Js will wait here and after async function done it will forward
// 4 


// console.log(1)

// setTimeout(()=>{
//     console.log(2)
// }, 3000)
// console.log(3)


//-------------with time out functionality--------//

// setTimeout(()=>{
// const myPromise = new Promise((resolve, reject)=>{
//         //     console.log(2)
//         const isCivic = true
//         if(isCivic){
//             resolve("hunza trip is done")
//         }else{
//             reject("ijazt nh mili ghar sy")
//         }
//     })
//     .then((result)=>{
//         console.log(result, "Yahoooo!!")
//     })
//     .catch((error)=>{
//         console.log(error, "error")
//     })
// }, 5000)


//-----------without timeout-----------///

// const myPromise = new Promise((resolve, reject)=>{
//     const isCivic = true
//     if(isCivic){
//         resolve("hunza trip is done")
//     }else{
//         reject("ijazt nh mili ghar sy")
//     }
// })
// .then((result)=>{
//     console.log(result, "Yahoooo!!")
// })
// .catch((error)=>{
//     console.log(error, "error")
// })

    // const myWish = new Promise((resolve, reject)=>{
        
    //     const isWish = true
    //     if(isWish){
    //         resolve("on right path to become a dveloper ")
    //         }else{
    //             reject("keep doing hardwork ")
    //         }
    // })
    // .then((result)=>{
    //     console.log(result, "IA!!")
    //     })
    //     .catch((error)=>{
    //         console.log(error, "dnt loose hope")
    //     })



    // fetch("https://api.escuelajs.co/api/v1/products")
    //     .then((data) => data.json())
    //     .then(result => {
    //         // console.log("result", result)
    //         renderUI(result)
    //     })
    //     .catch(error => {
    //         console.log("error", error)
    //     })

    //     const renderUI = (items) => {
    //             const parent = document.getElementById("parent")
    //             for (var product of items) {
    //                 console.log(product, "product")
                    
    //                 parent.innerHTML += ` <div class="col-lg-3">
    //                     <div class="card" style="width: 100%;">
    //                         <img src=${product.images[0]} style="width: 100%; height: 300px;"  class="card-img-top" alt="...">
    //                         <div class="card-body">
    //                          <h5 class="card-title"> ${product.title} </h5>
    //                             <p class="card-text"> ${product.description.slice(0,10)}</p>
    //                             <a href="#" class="btn btn-primary">Go somewhere</a>
    //                         </div>
    //                     </div>
    //                 </div>`
            
    //             }
    //         }
            
    
//     fetch("https://api.escuelajs.co/api/v1/products")
//     .then((data) => data.json())
//     .then(result => {
//         // console.log("result", result)
//         renderUI(result)
//     })
//     .catch(error => {
//         console.log("error", error)
//     })


// const renderUI = (items) => {
//     const parent = document.getElementById("parent")
//     for (var product of items) {
//         console.log(product, "product")
//         parent.innerHTML += ` <div class="col-lg-3">
//             <div class="card" style="width: 100%;">
//                 <img src=${product.images[0]} style="width: 100%; height: 300px;"  class="card-img-top" alt="...">
//                 <div class="card-body">
//                  <h5 class="card-title"> ${product.title} </h5>
//                     <p class="card-text"> ${product.description.slice(0, 100)} </p>
//                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//         </div>`

//     }
// }



// const loginRequest = async () => {
//     console.log()
//     console.log()
//     console.log()
//     await apicalling()
//     console.log()
// }


// async await
// try catch

const fetchData = async () => {

    // try{
    //         adnjkasdkljasdklj
    // }catch(error){

    // }
    try {
        console.log(11111111111)
        const response = await fetch("https://fakestoreapi.com/products").then(res => res.json())
        console.log(response)
        console.log(222222222)
        console.log("helloooo")
    } catch (error) {
        console.log("error", error)
    }


}

fetchData()


 