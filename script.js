// //fundamentals of javascript
// //arrays and objects
// //async js coding
// //foreach, map, filter, find, reduce, sort, reverse, slice, splice, join, split
// // let fruits = ["Apple", "Banana", "Mango"];

// // console.log(fruits[0]); // Apple
// // console.log(fruits[2]); // Mango
// // fruits[1] = "Orange";
// // console.log(fruits);
// // ["Apple", "Orange", "Mango"]
// // fruits.push("Grapes");

// // fruits.unshift("Pineapple");
// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }



// // var arr=[1,2,3,4,5,6,7,8,9,10];
// // //forEach ,map,filter,find indexof
// // arr.forEach(function(val){
// //     console.log(val+ "hello");
// // })

//  //forEach

// let arr = [1, 2, 3, 4];
// arr.forEach(function(val){
//     console.log(val+"hello")
 
// })
// //map function

// var newarr=arr.map(function(val){
//     return val*3;
// })
// console.log(newarr);
//  var ans=arr.filter(function(val){
//     if(val>=1){
//         return true;e}else return false;
//     }
//  )
//  console.log(ans);

//  var obj={
//     name:"gopal",
//     age:12
//  }
//  Object.freeze(obj)
//  obj.age=25;

//  function  abcd (a,c){
// return "hello my dear ";
//  }
//   var ans =abcd();
// async function getUser() {
//     var response = await fetch("https://randomuser.me/api");
//     var res = await response.json();
//     console.log(res);
// }

// getUser();
 async function abcd(){
  var blob =await fetch (`https://randomuser.me/api`)

  var ans = await blob.json();
  console.log(ans.results[0].name);
 }
 abcd();