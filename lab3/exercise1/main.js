/*
*  Create simple node script that converts 'www.mum.edu' domain name to the equivalent IP address. 
*   1. Use 'dns' Node core module, resolve4() 
*   2. Rewrite the code above and convert the callback function to a Promise object. 
*   3. Rewrite the code above and convert the promise to async/await block.
*
*/

// Way 1: 
const dns = require('dns');

dns.resolve4('mum.edu',function(err, addresses){
    console.log(addresses);
});


// Way 2:

const { promisify } = require('util');
const dns = require('dns');
const dnsResolve4Async = promisify(dns.resolve4);

dnsResolve4Async('mum.edu')
 .then((data)=> { console.log(data) })
 .catch((error) => { console.log(error) });


 // Way 3: 

 const { promisify } = require('util');
 const dns = require('dns');
 const dnsResolve4Async = promisify(dns.resolve4);

 async function giveMeIpv4(){
     try{
         const resolvedAddress = await dnsResolve4Async('mum.edu');
         console.log(resolvedAddress);

     }catch(error){
         console.log(error)
     }
 }

giveMeIpv4();