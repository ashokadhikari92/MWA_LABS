const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

app.set('x-powered-by',false);
app.enable('strict routing');
app.enable('case sensitive routing');
app.enable('trust proxy');

const crypto = require('crypto'),
    algorithm = 'aes256',
    password = 'asaadsaad';


const decrypt = function(text){
    var decipher = crypto.createDecipher(algorithm,password)
    var decriptedText = decipher.update(text,'hex','utf8')
    decriptedText += decipher.final('utf8');
    return decriptedText;
}

app.get('/secret', (req,res, next)=>{

    client.connect(function(error){
        const collection = client.db('week2').collection('week2.homework7');
    
        const doc = collection.findOne({});
        doc.then((value) => {
            const decriptedText = decrypt(value.message);
            res.status(200).json(decriptedText);
        });
    })

});

const port = 3000;
app.listen(port, () => console.log(`Listening on ${port} port.`));
