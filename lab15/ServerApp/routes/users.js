const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require('express-validator/check');
const User = require('./../models/user');

// user signup
router.post('/signup', function(req, res, next){

  bcrypt.hash(req.body.password, 10).then(password => {
    const user = new User({
      firstName: req.body.firstName ,
      lastName: req.body.lastName,
      email: req.body.email,
      password: password
    });

    user.save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });

});

// user login
router.post('/login',function(req, res, next){

  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      // return bcrypt.compare(req.body.password, user.password);

      res.status(200).json({
        message: "Login Successfull.",
        result: user
      });

    });
});

module.exports = router;
