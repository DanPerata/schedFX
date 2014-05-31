var mongoose = require("mongoose");
var moment = require("moment");

var appointmentSchema = mongoose.Schema({
	streetNumber: Number,
	street: String,
	city: String,
	state: String,
	postalCode: Number,
	country: String,
	emailAddress: String,
	phone: String,
	apiKey: String,
	date: {type: Date, default: Date.now},
	appointmentTime: Date
	

})

var appointmentModel = module.exports = mongoose.model("appointment", appointmentSchema);

