const router = require("express").Router();
const loginController = require("../../controllers/LoginController");

router.route("/")
  .post(loginController.create);

router.route("/:userName/:password").get(loginController.findUser);

module.exports = router;