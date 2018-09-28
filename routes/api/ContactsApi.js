const router = require("express").Router();
const contactsController = require("../../controllers/ContactController");

router.route("/")
  .post(contactsController.create);

router.route("/").get(contactsController.findAllContacts);

module.exports = router;