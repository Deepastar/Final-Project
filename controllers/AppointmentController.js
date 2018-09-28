const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Appointment
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => {console.log(err); res.status(422).json(err)});
      },
    findAllAppt: function(req, res){
        db.Appointment.aggregate(
            [
                {$match: {day: {$gt: req.params.rawDay}}},
                { $group: { 
                        _id: "$day",
                        count: {$sum: 1}
                    } 
                }
            ]
        )
            .then(dbModel => {res.json(dbModel)})
            .catch(err => {console.log(err); res.status(422).json(err)});
    },
    findApptByDay: function(req, res){
        db.Appointment
            .find({day: req.params.day}, "time")
            .sort({day:1})
            .then(dbModel => res.json(dbModel))
            .catch(err => {console.log(err); res.status(422).json(err)});
    },
    findApptByUser: function(req, res){
        db.Appointment
            .find({userName: req.params.userName}, "day time service address" )
            .sort({day: 1})
            .then(dbModel => {res.json(dbModel);})
            .catch(err => {console.log(err); res.status(422).json(err)});
    }
};