/**
 * Create a Reactive HTTP server that serves files when url query parameter is passed with the request. 
 * The file path is provided in the URL like this: http://localhost:4000/?url=path/to/my/file.txt   
 * Your logic of reading the file should be in a separate child process.
 */

 const http = require('http');
 const fs = require('fs');
 const { fork } = require('child_process');
 const url = require('url');
 const { Subject } = require("rxjs");

//  const subject = new Subject();

 http.createServer((req,res)=>{
    const myUrl = url.parse(req.url,true);
    const filePath = myUrl.query.url;
    console.log(filePath);

    try{
        if(fs.existsSync(filePath)){
            res.end("Successfully fetched given file."+filePath);
        }else{
            res.end("Can not access given file path.");
        }
    }catch(error){
        res.end("Error occurred.");
    }
   
    // console.log(myUrl);
    // const childProcess = fork('child.js');
    // subject.next({req,res});
    
 }).listen(4000);