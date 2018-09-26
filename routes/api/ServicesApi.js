const router = require("express").Router();
const servicesController = require("../../controllers/ServicesController");

router.route("/")
  .post(servicesController.create);

router.route("/").get(servicesController.findAllServices);

module.exports = router;