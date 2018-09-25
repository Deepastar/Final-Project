const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
    create: function(req, res) {
        db.Login
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    findUser: function(req, res){
        db.Login
            .findOne({userName: req.params.userName, password: req.params.password}, req.body)
            .then((dbModel) => {
                jwt.sign({user: dbModel.userName}, "secret-key", (err, token) => {
                    res.json({token});
                });
            })
            .catch(err => res.status(422).json(err));
    }
};