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

module.exports = router;
