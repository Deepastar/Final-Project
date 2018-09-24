const router = require("express").Router();
const loginRoutes = require("./LoginApi");


router.use("/login", loginRoutes);

module.exports = router;