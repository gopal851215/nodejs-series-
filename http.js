const http =require('http');
const server = http.createServer(function(re,res){
res.end("hello world");
})
server.listen(3000);