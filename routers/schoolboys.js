const express = require("express");
const router = express.Router();
const PupModel = require("../Model/Schoolboy");

// Get to all schoolboys
router.get("/", async (req, res) => {
  const schoolboys = await PupModel.find().sort({ score: -1 });
  res.render("schoolboys", {
    title: " All Schoolboys",
    schoolboys,
  });
});

router.get("/add", async (req, res) => {
  res.render("formSchoolboy", {
    title: "Add new schoolboy",
  });
});
router.get("/add/score", async (req, res) => {
  res.render("addscore", {
    title: "Add score",
  });
});

// Post to all schoolboys
router.post("/add", async (req, res) => {
  const { name, surname, number, group, month, score } = req.body;

  const boy = new PupModel({
    name,
    surname,
    number,
    group,
    month,
    score,
  });
  await boy.save();
  res.status(201).redirect("/");
});

// POST TO SCORE
router.get("/schoolboy/:id", async (req, res) => {
  const peopleFind = await PupModel.findById(req.params.id);
 
  res.render("addscore", {
    addscore: peopleFind,
  });
});

router.post("/score/:id", async (req, res) => {
 const test = +req.body.addscore + +req.body.scoreEskisi;
 
  const peopleScore = {
    score: test,
  };

  await PupModel.findByIdAndUpdate(req.params.id, peopleScore);
  res.redirect("/")
});
// Search yp month
router.get("/filtermonth", async (req, res) => {
  
  res.render("filtermonth", {
  
  });
});
router.get("/filter", async (req, res) => {
  const oy = await PupModel.find({month: req.query.month});
  res.render("schoolboys", {
    schoolboys: oy,
  });
});
module.exports = router;
