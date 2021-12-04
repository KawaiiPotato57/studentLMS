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
  Quiz.findById(id).then((quiz) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(quiz);
})
.catch((err) => next(err));  
});

/* Get attempt Quiz. */
router.get('/attemptQuiz', function(req, res, next) {
  console.log("Now in Ateempt Quiz");
  const id= res.body.quizId;
  Quiz.findById(id).then((quiz) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(quiz);
})
.catch((err) => next(err));  
});

/* GET all the posted assignments. */
router.get('/viewAssignment/:id', function(req, res, next) {
  console.log("Now in View Assignment");
  const id= req.params.id; //specific assignment accessed by student
  Assignment.findById(id).then((assignment) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(assignment);
})
.catch((err) => next(err));  
});

/* Post assignment . */
router.post('/submitAssignment', function(req, res, next) {
  console.log("Now in Post Assignment");
  const obj= res.body;
  Assignment.create(obj).then((assignment) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(assignment);
})
.catch((err) => next(err));  
});


/* GET all material. */
router.get('/material', function(req, res, next) {
    Material.find({}).then((mtr) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(mtr);
})
.catch((err) => next(err));  
});


/* GET Material related to a Id*/
router.get('/material/:id', function(req, res, next) {
  console.log("Now in View Material");
    Material.findById(req.params.id).then((mtr) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(mtr);
})
.catch((err) => next(err));  
});


/* Get Material related to a subject. */
router.get('/material/:subid', function(req, res, next) {
  console.log("Now in View Material by subId");
  const SubID= req.params.subid;
  Material.find({class: SubID }).then((mtr) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(mtr);
})
.catch((err) => next(err));  
});



/* Get all results */
router.get('/result', function(req, res, next) {
Result.find({student:id}).populate("Student").populate("Class").then((result) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(result);
})
.catch((err) => next(err));  
});



/* get Results with ID */
router.get('/result:id', function(req, res, next) {
const id = req.params.id;
  Result.find({student:id}).populate("Student").populate("Class").then((result) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(result);
})
.catch((err) => next(err));  
});


module.exports = router;
