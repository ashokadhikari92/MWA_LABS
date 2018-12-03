const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const mongoose = require('mongoose');
const Grade = require('./../model/grade');


mongoose.connect("mongodb+srv://ashok:NlVCR04HgA0bgLFQ@cluster0-6hxkz.mongodb.net/test?retryWrites=true")
    .then(() => {
        console.log("Connected to database");
    })
    .catch(() => {
        console.log("Connection failed.");
    })

let grades = [];
let index = 0;

// Get list of grades
router.get('/', function(req, res, next) {
  Grade.find()
    .then((documents => {
      res.json({
        message: "Grades fetch successfully.",
        grades: documents
      });
    }));
});

// Add new grade
router.post('/create',[
  check('name','Name filed is required.').exists(),
  check('course','Course filed is required.').exists(),
  check('grade','Grade filed is required.').exists(),
  check('grade','Grade should be number.').isNumeric()
], function(req, res, next){
  
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()});
  }
  const newGrade = new Grade({
    name: req.body.name,
    course: req.body.course,
    grade: req.body.grade
  })
  
  newGrade.save();
  grades.push(newGrade);

  res.status(201).json(newGrade);

});

// Update grade
router.put('/update/:id', [
  check('name','Name filed is required.').exists(),
  check('course','Course filed is required.').exists(),
  check('grade','Grade filed is required.').exists(),
  check('grade','Grade should be number.').isNumeric()
],function(req, res, next){

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()});
  }

  let existingGrade = grades.find(grade => grade.id == req.params.id);

  if(!existingGrade){
    return res.status(422).json({errors: [
      {
        msg: 'The given id does not exist'
      }
    ]});
  }

  const updatedGrade = {
    id: existingGrade.id,
    name: req.body.name,
    course: req.body.course,
    grade: req.body.grade
  };

  const indexOfGrade = grades.indexOf(existingGrade);
  grades[indexOfGrade]  = updatedGrade;
  res.status(202).json(updatedGrade);
});


// Delete grade
router.delete('/delete/:id',function(req, res, next){
  let existingGrade = grades.find(grade => grade.id == req.params.id);
  
    if(!existingGrade){
      return res.status(422).json({errors: [
        {
          msg: 'The given id does not exist'
        }
      ]});
    }

    const newGrades = grades.filter(grade => grade.id != existingGrade.id);
    grades  = newGrades;
    res.status(200).json({ msg: 'The Grade deleted successfully.'});
});

module.exports = router;
