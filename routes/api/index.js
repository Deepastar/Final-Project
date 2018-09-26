const router = require("express").Router();
const loginRoutes = require("./LoginApi");
const appointmentRoutes = require("./AppointmentApi");
const servicesRoutes = require("./ServicesApi");

router.use("/login", loginRoutes);
router.use("/appointment", appointmentRoutes);

module.exports = router;