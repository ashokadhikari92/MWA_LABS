/**
 *  1. Create a web server that's going to send a response of big file (bigger then 200MB) to any client that 
 *     sends a request to your specified server:port. 
 * 
 *  2. Solve this question in many different ways and inspect the loading time in the browser and send many 
 *     requests at the same time to observe performance differences, write down your observations
 */

 // Note: To run this program, first create a file  named as "responseFile.txt" (I created file with more than 250 MB in size) inside exercise2 folder

 // Way 1: Using Synchronous File read
 const http = require('http');
 const server = http.createServer();
 const fs = require('fs');
 const path = require('path');

 server.on('request', function(req,res){
    let responseFile = fs.readFileSync(path.join(__dirname,'responseFile.txt'),'utf8');
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write(responseFile);
    res.end();
 });

 server.listen(4000);

 // Observation: consumed a lot of app memory, if I opended in multiple browser tab, it does not get any response


 // Way 2: Using Asynchronous file read
 const http = require('http');
 const server = http.createServer();
 const fs = require('fs');
 const path = require('path');

 server.on('request', function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});    
    let responseFile = fs.readFile(path.join(__dirname,'responseFile.txt'),'utf8',function(error,fileData){
        res.write(fileData);
        res.end();
    });
 });

 server.listen(4000);

 // Observation: consumed a lot of app memory, if I opended in multiple browser tab, each request started to get some response.


 // Way 2: Using Asynchronous file read
 const http = require('http');
 const server = http.createServer();
 const fs = require('fs');
 const path = require('path');
 

 server.on('request', function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});  
    const readStream = fs.createReadStream(path.join(__dirname,'responseFile.txt'));
    readStream.pipe(res);  
 });

 server.listen(4000);

 // Observation: Did not consumed large amount of memory, and if I opened multiple tabs, each request started to get response.
