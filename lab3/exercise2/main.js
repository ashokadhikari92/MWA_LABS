/**
 *  1. Create a web server that's going to send a response of big file (bigger then 200MB) to any client that 
 *     sends a request to your specified server:port. 
 * 
 *  2. Solve this question in many different ways and inspect the loading time in the browser and send many 
 *     requests at the same time to observe performance differences, write down your observations
 */

 const http = require('http');
 const server = http.createServer();
 const fs = require('fs');

 server.on('request', function(req,res){
     res.writeHead(200, {'Content-Type':'text/plain'});
     res.write("Hello World");
     res.end();
 });

 server.listen(4000);