const router = require("express").Router();
const loginRoutes = require("./LoginApi");

// Book routes
router.use("/login", loginRoutes);

module.exports = router;