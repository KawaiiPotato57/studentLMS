var express = require("express");
var router = express.Router();
const Quiz = require("../models/quiz");
const Student = require("../models/student");
const Class = require("../models/class");
const Assignment = require("../models/assignment");
const Result = require("../models/result");
const Material = require("../models/material");

/* GET Teachers Listing. */
router.get("/", function (req, res, next) {
  res.send("Now in Teachers");
});

/* GET Teachers Listing. */
router.get("/viewQuiz", function (req, res, next) {
  console.log("Now in Teachers View Quiz");
  const id = res.body.quizId;
   Quiz.findById(id)
    .then((quiz) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(quiz);
    })
    .catch((err) => next(err));
});

/* Teacher Adding Quiz. */
router.post("/addQuiz", function (req, res, next) {
  console.log("Now in Add quiz Teacher");
  const obj = res.body;
 Quiz.create(obj)
    .then((quiz) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(quiz);
    })
    .catch((err) => next(err));
});

/* GET Quiz on Id. */
router.get("/quiz/:id", function (req, res, next) {
  console.log("Now in get quiz id Teacher side ");
  Quiz.findById(req.params.id)
    .then((quiz) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(quiz);
    })
    .catch((err) => next(err));
});

/* delete Quiz on Id. */
router.delete("/quiz:id", function (req, res, next) {
  console.log("Now in teacher delete quiz");
  Quiz.findByIdAndDelete(req.params.id).exec();
  if (Quiz.find(req.params.id)) {
    res.send("Not deleted ");
  } else {
    res.send("Deleted Successfully");
  }
});

/* View Assignment */
router.get("/viewAssignment", function (req, res, next) {
  console.log("Now in View Assignemnt Teacher");
  Assignment.find({})
    .then((assignment) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(assignment);
    })
    .catch((err) => next(err));
});

/* Add Assignment */
router.post("/addAssignment", function (req, res, next) {
  console.log("Now in add assignment teacher");
  const obj = res.body;
  Assignment.create(obj)
    .then((assignment) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(assignment);
    })
    .catch((err) => next(err));
});

/* GET Assignment on ID. */
router.get("/assign/:id", function (req, res, next) {
  console.log("Assignment with ID teacher");
  Assignment.findById(req.params.id)
    .then((assignment) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(assignment);
    })
    .catch((err) => next(err));
});

/* Delete Assignment */
router.delete("/assignment/:id", function (req, res, next) {
  console.log("Delete assignment with id Teacher");
  const assignment = Assignment.findByIdAndDelete(req.params.id).exec();
  if (Assignment.find(req.params.id)) {
    res.send("Not deleted ");
  } else {
    res.send("Deleted Successfully");
  }
});

/* add material. */
router.post("/addMaterial", function (req, res, next) {
  console.log("now in Add Materials");
  const obj = res.body;
  Material.create(obj).then((material) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(material);
  })
  .catch((err) => next(err));
});


/* GET Material*/
router.get("/materials", function (req, res, next) {
  console.log("Get Materials in Teachers");
  const material = Material.find({}).then((material) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(material);
  })
  .catch((err) => next(err));
});

/* delete Material by Id*/
router.delete("/material/:id", function (req, res, next) {
  console.log("Delete Material Id teacher");
  const material = Material.findByIdAndDelete(req.params.id).exec();
  if (Material.find(req.params.id)) {
    res.send("Not deleted ");
  } else {
    res.send("Deleted Successfully");
  }
});

/* Add Marks. */
router.post("/addMarks", function (req, res, next) {
  console.log("Add Marks in Result");
  const obj = req.body;
  Result.create(obj).then((marks) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(marks);
  })
  .catch((err) => next(err));
});

/* Update marks. */
router.put("/marks/:id", function (req, res, next) {
  console.log("Add Marks in Result with Id teacher");
  const id = req.params.id;
   Result.findById(id).then((marks) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(marks);
  })
  .catch((err) => next(err));
});

/* Delet based on id. */
router.delete("/marks/:id", function (req, res, next) {
  console.log("Delete Marks in Result with Id, teacher");
  const id = req.params.id;
  const marks = Result.findByIdAndDelete(id).exec();
  if (Result.find(req.params.id)) {
    res.send("Not deleted ");
  } else {
    res.send("Deleted Successfully");
  }
});

module.exports = router;
