var express = require('express');
var router = express.Router();
const Quiz = require("../models/quiz");
const Student = require("../models/student")
const Class =  require("../models/class");
const Assignment = require("../models/assignment");
const Result = require("../models/result");
const Material = require("../models/material");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Now in Student Home ');
});

/* View Quiz. */
router.get('/viewQuiz', function(req, res, next) {
  console.log("Now in View Quiz");
  const id= req.body.quizId;
  const quiz=Quiz.findById(id).exec();
  res.json(quiz);
  
});

/* Get attempt Quiz. */
router.get('/attemptQuiz', function(req, res, next) {
  console.log("Now in Ateempt Quiz");
  const id= res.body.quizId;
  const quiz=Quiz.findById(id).exec();
  res.json(quiz);
}); 

/* GET all the posted assignments. */
router.get('/viewAssignment/:id', function(req, res, next) {
  console.log("Now in View Assignment");
  const id= req.params.id; //specific assignment accessed by student
  const assignment=Assignment.findById(id).exec();
  res.json(assignment)
});

/* Post assignment . */
router.post('/submitAssignment', function(req, res, next) {
  console.log("Now in Post Assignment");
  const obj= res.body;
  const assignment=Assignment.create(obj).exec();
  res.json(assignment);
});

/* GET all material. */
router.get('/material', function(req, res, next) {
  const mtr= Material.find({}).exec();
  res.json(mtr);
});

/* GET Material related to a Id*/
router.get('/material/:id', function(req, res, next) {
  console.log("Now in View Material");
  const mtr=Material.findById(req.params.id).exec();
  res.json(mtr);
});

/* Get Material related to a subject. */
router.get('/material/:subid', function(req, res, next) {
  console.log("Now in View Material by subId");
  const SubID= req.params.subid;
  const mtr = Material.find({class: SubID });
  res.json(mtr);
});

/* Get all results */
router.get('/result', function(req, res, next) {
const result=result.find({student:id}).populate("Student").populate("Class");
res.json(result);
});

/* get Results with ID */
router.get('/result:id', function(req, res, next) {
const id = req.params.id;
const result=result.find({student:id}).populate("Student").populate("Class");
res.json(result);
});


module.exports = router;
