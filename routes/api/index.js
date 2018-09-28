const router = require("express").Router();
const loginRoutes = require("./LoginApi");
const appointmentRoutes = require("./AppointmentApi");
const contactsRoutes = require("./ContactsApi");

router.use("/login", loginRoutes);
router.use("/appointment", appointmentRoutes);
router.use("/contacts", contactsRoutes);

module.exports = router;