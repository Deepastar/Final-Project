const router = require("express").Router();
const loginRoutes = require("./LoginApi");
const appointmentRoutes = require("./AppointmentApi");


router.use("/login", loginRoutes);
router.use("/appointment", appointmentRoutes);

module.exports = router;