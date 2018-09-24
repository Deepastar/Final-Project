const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Login
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    findUser: function(req, res){
        db.Login
            .findOne({userName: req.params.userName}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};