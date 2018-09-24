const router = require("express").Router();
const loginController = require("../../controllers/LoginController");

router.route("/")
  .post(loginController.create);

module.exports = router;