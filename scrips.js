const express =require('express');
const app =express();


app.use( function(req ,res,next){
console.log("middleware chsls")
next();
}
);
app.use( function(req ,res,next){
console.log("middleware chala eek  aur bar")
next();
}
);

app.get("/",function(req,res){

  res.send("champion mera anuj");
})

app.get("/about",function(req,res){

  res.send("about page");
})

// app.get("/profile",function(req,res ,next){
// return next(new Error("something went wrong"))
 
// })

// app.use((error,req,res,next)=>{
//   console.error(error.stack)
//   res.status(500).send('something  went broke!')
// })
app.listen(3000);