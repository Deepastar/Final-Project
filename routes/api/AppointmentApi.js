const router = require("express").Router();
const appointmentController = require("../../controllers/AppointmentController");

router.route("/create")
  .post(appointmentController.create);

router.route("/").get(appointmentController.findAllAppt);

module.exports = router;