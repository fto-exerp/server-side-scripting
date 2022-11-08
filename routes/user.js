var express = require("express");
var router = express.Router();
var UserService = require("../data/UserService");

router.get("/", async function (req, res, next) {
  res.send(await UserService.getPersons());
});

module.exports = router;
