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