const router = require("express").Router();
const loginController = require("../../controllers/LoginController");

// Route to check whether the userName exists before doing signUp
router.route("/:userName").get(loginController.findUserName);

// Route to Insert the userName and Password into db while doing signUp
router.route("/")
  .post(loginController.create);

//Route to select from the db the UserName and Password while doing signIN.
// This route also Creates and Returns the JWT token.
router.route("/:userName/:password").get(loginController.findUser);

module.exports = router;