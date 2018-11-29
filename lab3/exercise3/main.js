/**
 *  1. Build a pseudo-class named "Gym" that emits a "go" event every 1 second.
 * 
 *  2. Write a script that creates an instance of "Gym" and bind to the "go" event, printing
 *     "Athlete is working out" every time it gets one.
 */
const EventEmitter = require('events');

 class Gym extends EventEmitter{
     constructor(){
        super();
        setInterval(()=>{
            this.emit('go',"Athlete is working out");
        },1000);
     }
 }

 let gym = new Gym();
 gym.on("go",function(value){
     console.log(value);
 })