const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
    userName: {type:String, required:true},
    rawDay: {type:Date, required:true},
    day: {type: String, required:true},
    time: {type:String, required:true},
    service: {type: String, required: true}
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;