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
                if(typeof dbModel !== "undefined" && dbModel !== null){
                    jwt.sign({user: dbModel.userName}, "secret-key", (err, token) => {
                        if(err !== null)
                            res.status(403).json(err);
                        res.json({token});
                    });
                } else{
                    res.json(dbModel);
                }
            })
            .catch(err => { console.log(err); res.status(422).json(err)});
    },
    findUserName: function(req, res){
        db.Login
            .findOne({userName: req.params.userName}, req.body)
            .then((dbModel) => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    }

};