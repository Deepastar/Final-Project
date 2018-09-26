const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Services
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    findAllServices: function(req, res){
        db.Services
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .sort({serviceName: 1})
            .catch(err => res.status(422).json(err));
    }
};