const db = require("../models");

module.exports = {
    create: function(req, res) {
        console.log("In Create: " + req.body);
        db.Appointment
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    findAllAppt: function(req, res){
        console.log("Reached: findAllAppt:" + req.params.rawDay);
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
            .then(dbModel => {console.log("dbmodel: " + dbModel) ; res.json(dbModel)})
            .catch(err => res.status(422).json(err));
    },
    findApptByDay: function(req, res){
        console.log("Reached findApptByDay" + req.params.day);
        db.Appointment
            .find({day: req.params.day}, "time")
            .sort({day:1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findApptByUser: function(req, res){
        console.log("Reached findApptByUser" + req.params.userName);
        db.Appointment
            .find({userName: req.params.userName}, "day time service" )
            .sort({day: 1})
            .then(dbModel => { console.log("dbmodel size: " + dbModel); res.json(dbModel);})
            .catch(err => {console.log(err); res.status(422).json(err)});
    }
};