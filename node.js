// // node.js basics:
// //  introduction to node.js
// //  installing node.js and npm.and/

// //  working with modules
// //  file system operations
// //  understanding http module


// //
// // npm int ->package.json->lekha jokha of the project

// // const fs = require('node:fs');
// // fs.writeFilecopyfile
// // fs.copyFile
// // renamefile
// // fs.unlink



// const fs = require('node:fs');
// fs.writeFile("hey.txt","hey hello kaise ho",function(err){
//     if(err)console.error(err);
//     else console.log("done");
// })

// fs.appendFile("hey.txt","hey hello kaise ho gopal",function(err){
//     if(err)console.error(err);
//     else console.log("done");
// })

// fs.rename("hey.txt" ,"hello.txt" ,function(err){
//     if(err)console.error(err);
//     else console.log("done");
// }) 

// fs.copyFile("hello.txt","./copy/hash.txt",function(err){
//     if(err)console.error(err.message);
//     else console.log("done");
// })

// fs.unlink("hello.txt" ,function(err){
//     if(err)console.error(err);
//     else console.log("removed")
// })
// fs.rmdir("./copy",{recursive :true},
//     function (err){
//         if(err)console.error(err);
//         else console.log("removed");
//     }
// )
