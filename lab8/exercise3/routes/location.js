const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');


const seedLocations = [
    {"name" : "Pizza Hut", "category" : "Restaurant", "location" : [ -91.98914, 41.00686 ] },
    {"name" : "Walmart Supercenter", "category" : "Supercenter", "location" : [ -91.99326780000001, 41.00768800000001 ] },
    {"name" : "Hy-Vee", "category" : "Supermarket", "location" : [ -91.9785195, 41.00467999999999 ] },
    {"name" : "Subway ", "category" : "Restaurants", "location" : [ -91.97267169999998, 41.0067101 ] },
    {"name" : "Fairfield Recreation Center", "category" : "Recreation Center", "location" : [ -91.97523239999998, 41.0054453 ] },
    {"name" : "The Depot Brewery", "category" : "Night Club", "location" : [ -91.9680032, 41.01098500000001 ] }
];

router.get('/find', (req,res, next)=>{

    const collection = req.app.locals.db.collection('locations');

    collection.find({
         location : { $near : [-91.9665342, 41.017654] }
    })
    .limit(3).toArray((err,result)=>{
        if(err){
            return res.status(500).json({error:err});
        }
        
        return res.status(200).json({data:result});
    });

});


router.post('/insert',[
    check('name','Name filed is required.').exists(),
    check('category','Category filed is required.').exists(),
    check('lat','Latitude filed is required.').exists(),
    check('long','Longitude filed is required.').exists(),
    check('lat','Latitude should be numeric value.').isNumeric(),
    check('long','Longitude should be numeric value.').isNumeric()
], (req,res, next)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({errors: errors.array()});
    }

    const newLocation = {
        name: req.body.name,
        category: req.body.category,
        location: [parseFloat(req.body.long),parseFloat(req.body.lat)]
      };

      
    const collection = req.app.locals.db.collection('locations');
    collection.insertOne(newLocation,(err,insertedLocation)=>{
        if(err) return res.status(500).json({error: err});

        return res.status(201).json({data:insertedLocation});
    });
    
    
});

module.exports = router;
