Explain why do we want sometimes to use setImmediate instead of using setTimeout?

    setTimeout callbacks are executed before any I/O callbacks, but sometimes we might have case to run callbacks after finishing I/O eventhandlers. At that time we should use setImmediate, which queues the callbacks immedieately after the last I/O handler.


Explain the difference between process.nextTick and setImmediate ?

    pricess.nextTick would be executed at next tick of event loop after immediately compleleting the current function. However, the setImmediate, basically has a separate phase in event loop which ensures that the callback registered under setImmediate() will be called only after the I/O callback and polling phase.



 Name 10 core modules that node provide by default.

    10 core modules of node are
     - dns - To do DNS lookups and name resolution functions
     - http - To make Node.js act as an HTTP server
     - fs - To handle the file system
     - events - TO handle events
     - crypto - To handle OpenSSl cryptographic functions
     - os - Provides information about the operating system
     - path - To handle file paths
     - url - TO parse URL strings
     - util - To access utility functions
     - timers - To execute a function after a given number of milliseconds
     - zlib - To compress or decompress files




