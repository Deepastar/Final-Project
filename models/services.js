const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const servicesSchema = new Schema({
    serviceName: {type:String, required:true},
    description: {type: String, required:true}
});

const Services = mongoose.model("Services", servicesSchema);

module.exports = Services;