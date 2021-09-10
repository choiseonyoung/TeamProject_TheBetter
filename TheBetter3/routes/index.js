var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index2", { title: "Express" });
});

router.get("/m", function (req, res, next) {
  res.render("magnet", { title: "Express" });
});

router.get("/mm", function (req, res, next) {
  res.render("index2_magnet", { title: "Express" });
});

router.get("/g", function (req, res, next) {
  res.render("group", { title: "Express" });
});

router.get("/gg", function (req, res, next) {
  res.render("group2", { title: "Express" });
});

router.get("/puzzle", function (req, res, next) {
  res.render("index3", { title: "Express" });
});

module.exports = router;
