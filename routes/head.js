var express = require('express');
var router = express.Router();
const Class= require ("../models/class");
const Result= require ("../models/result");
const Material= require ("../models/material");

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("get all heads");
  res.send("All okay in home head");
});

/* GET Class */
router.get('/class', function(req, res, next) {
  console.log("get all class");
  const classes = Class.find({}).populate('student').exec();
});

/* GET Results of class based on Id. */
router.get('/results/class/:id', function(req, res, next) {
  console.log("Results of class having ID in head");
  const id = req.params.id;
  const result = Result.find({class: id}).populate('class').populate("student").exec();
});

/* Get results of student based on Id. */
router.get('/results/student/:id', function(req, res, next) {
const id = req.params.id;
const result = Result.find({student:id}).populate("class").populate("student").exec();
res.send(result);
});

/* Get Materials. */
router.get('/materials', function(req, res, next) {
 const id = req.params.id;
 const materials = Material.find({}).populate("class").exec();
});

module.exports = router;
