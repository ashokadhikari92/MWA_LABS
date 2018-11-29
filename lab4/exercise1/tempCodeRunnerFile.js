
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