const router = require("express").Router();
const jwt = require("jsonwebtoken");
const appointmentController = require("../../controllers/AppointmentController");

// Verifies whether the token is valid or not.
var verifyToken = function(req, res, next){
  
  var bearer = req.headers["authorization"];
  if(typeof bearer !== "undefined"){
    token = bearer.split(" ");
    console.log(token);
    jwt.verify(token[1], "secret-key", (err, authData) =>{
      if(err){
        console.log("Error : " + err);
        res.sendStatus(403);
      }else{
        console.log(authData);
        next();
      }
    });
  }else{
    res.sendStatus(403);
  }
}

router.route("/create")
  .post(verifyToken, appointmentController.create);

router.route("/rawDay/:rawDay").get(appointmentController.findAllAppt);
router.route("/userName/:userName").get(appointmentController.findApptByUser);
router.route("/:day").get(appointmentController.findApptByDay);

module.exports = router;