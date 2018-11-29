const loadFile = (path) =>{
    console.log(path);
}
 process.on("message", (message) => {
    console.log(message);
    const result = loadFile(message.path);

    process.send(result);
 });