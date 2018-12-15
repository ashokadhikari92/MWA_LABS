const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');


// user signup
router.post('/signup', function(req, res, next){

  res.status(201).json({status:201, msg:"User signup successfully."});

});

// user login
router.put('/update/:id',function(req, res, next){

  res.status(200).json({status:200, msg: "User loggedin successfully."});
});

module.exports = router;
