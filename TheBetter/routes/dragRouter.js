var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("drag");
});

router.get("/2", (req, res) => {
  res.render("drag2");
});

router.get("/3", (req, res) => {
  res.render("drag3");
});

// https://runebook.dev/ko/docs/dom/datatransfer/effectallowed
router.get("/test", (req, res) => {
  res.render("test");
});

router.get("/snap", (req, res) => {
  res.render("snap");
});

module.exports = router;
