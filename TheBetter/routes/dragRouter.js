var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("drag");
});

router.get("/v2", (req, res) => {
  res.render("drag2");
});

// https://runebook.dev/ko/docs/dom/datatransfer/effectallowed
router.get("/test", (req, res) => {
  res.render("test");
});

module.exports = router;
