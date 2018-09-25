const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Appointment
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    findAllAppt: function(req, res){
        db.Appointment
            .find(req.query)
            .sort({day: 1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};