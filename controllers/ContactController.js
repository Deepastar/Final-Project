const db = require("../models");

module.exports = {
    create: function(req, res) {
        console.log(req.body);
        db.Contacts
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => { console.log(err); res.status(422).json(err)});
      },
    findAllContacts: function(req, res){
        db.Contacts
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .sort({fullName: 1})
            .catch(err => res.status(422).json(err));
    }
};