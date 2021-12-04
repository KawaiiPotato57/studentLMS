var express = require('express');
var router = express.Router();
const Quiz = require("../models/quiz");
const Student = require("../models/student")
const Class =  require("../models/class");
const Assignment = require("../models/assignment");
const Result = require("../models/result");
const Material = require("../models/material");

/* GET Teachers Listing. */
router.get('/', function(req, res, next) {
  res.send('Now in Teachers');
});

/* GET Teachers Listing. */
router.get('/viewQuiz', function(req, res, next) {
  console.log("Now in Teachers View Quiz");
  const id= res.body.quizId;
  const quiz=Quiz.findById(id).exec();
  res.json(quiz);
  
});

/* Teacher Adding Quiz. */
router.post('/addQuiz', function(req, res, next) {
 console.log("Now in Add quiz Teacher");
 const obj= res.body;
 const quiz=Quiz.create(obj).exec();
 res.json(quiz);
});

/* GET Quiz on Id. */
router.get('/quiz/:id', function(req, res, next) {
  console.log("Now in get quiz id Teacher side ");
  const quiz = Quiz.findById(req.params.id).exec();
  res.json(quiz);
});


/* delete Quiz on Id. */
router.delete('/quiz:id', function(req, res, next) {
  console.log("Now in teacher delete quiz");
  const quiz = Quiz.findByIdAndDelete(req.params.id).exec();
  if(Quiz.find(req.params.id)){
    res.send("Not deleted ")
  }
  else {
    res.send("Deleted Successfully");
  }
});

/* View Assignment */
router.get('/viewAssignment', function(req, res, next) {
  console.log("Now in View Assignemnt Teacher");
  const assignment =  Assignment.find({}).exec();
  res.json(assignment);
});

/* Add Assignment */
router.post('/addAssignment', function(req, res, next) {
  console.log("Now in add assignment teacher");
  const obj = res.body;
  const assignment = Assignment.create(obj).exec();
  res.json(assignment);
});

/* GET Assignment on ID. */
router.get('/assign/:id', function(req, res, next) {
console.log("Assignment with ID teacher");
const assignment = Assignment.findById(req.params.id).exec();
res.json(assignment);
});

/* Delete Assignment */
router.delete('/assignment/:id', function(req, res, next) {
console.log("Delete assignment with id Teacher");
const assignment = Assignment.findByIdAndDelete(req.params.id).exec();
if(Assignment.find(req.params.id)){
  res.send("Not deleted ")
}
else {
  res.send("Deleted Successfully");
}
});

/* add material. */
router.post('/addMaterial', function(req, res, next) {
  console.log("now in Add Materials");
  const obj = res.body;
  const material = Material.create(obj).exec();
  res.json(material);
});

/* GET Material*/
router.get('/materials', function(req, res, next) {
  console.log("Get Materials in Teachers");
  const material = Material.find({}).exec();
  res.body(material);
});

/* delete Material by Id*/
router.delete('/material/:id', function(req, res, next) {
console.log("Delete Material Id teacher");
const material =  Material.findByIdAndDelete(req.params.id).exec();
if(Material.find(req.params.id)){
  res.send("Not deleted ")
}
else {
  res.send("Deleted Successfully");
}
});

/* Add Marks. */
router.post('/addMarks', function(req, res, next) {
console.log("Add Marks in Result");
const obj= req.body;
const marks= Result.create(obj).exec();
});

/* Update marks. */
router.put('/marks/:id', function(req, res, next) {
  console.log("Add Marks in Result with Id teacher");
const id= req.params.id;
const marks= Result.findById(id).exec();
res.send(marks);
});

/* Delet based on id. */
router.delete('/marks/:id', function(req, res, next) {
  console.log("Delete Marks in Result with Id, teacher");
  const id= req.params.id;
  const marks= Result.findByIdAndDelete(id).exec();
  if(Result.find(req.params.id)){
    res.send("Not deleted ")
  }
  else {
    res.send("Deleted Successfully");
  }
});

module.exports = router;
 