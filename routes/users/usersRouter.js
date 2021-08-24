var express = require("express");
var router = express.Router();
var passport = require("passport");
var {
  createUser,
  login
} = require("./controller/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create-user", createUser);
router.post("/login", login);

router.put(
  "/update-profile",
  passport.authenticate("jwt-user", {
    session: false
  }),
  function (req, res) {
    res.send("YAY!!!");
  }
);

module.exports = router;