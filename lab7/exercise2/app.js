const express = require('express');
const app = express();
const secretRoutes = require('./routes/secret');

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

app.set('x-powered-by',false);
app.enable('case sensitive routing');
app.enable('trust proxy');


app.use('/secret', secretRoutes);


client.connect(function(error){
    app.locals.db = client.db('week2');
    const port = 3000;
    app.listen(port, () => console.log(`Listening on ${port} port.`));
})

