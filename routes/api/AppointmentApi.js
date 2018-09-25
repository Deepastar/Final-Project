const router = require("express").Router();
const appointmentController = require("../../controllers/AppointmentController");

var cb1 = function(req, res, next){
    console.log(req.body);
    next();
}
router.route("/create")
  .post(cb1, appointmentController.create);

router.route("/").get(appointmentController.findAllAppt);

module.exports = router;