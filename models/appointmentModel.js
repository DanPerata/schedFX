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
	date: {type: String, default: moment().format("X")},
	appointmentTime: String, 
})

/*
	var dayOfSubmission = new Date();

	var firstValidDate;
	var dayOfWeekLimit = 5;   // 5 limits days of schedulling to Mon - Thurs

var findValidDate = function (inputDate){
	var checkDate = new Date(inputDate);
	checkDate.setDate(checkDate.getDate() + 1);
	if (checkDate.getUTCDay() < dayOfWeekLimit) {
		firstValidDate = checkDate;
	}
	// if the checkDate is on Fri, Sat, or Sun this will increment checkDate to Monday
	else if (checkDate.getUTCDay() >= 5) {
		while (checkDate.getUTCDay() !== 1){
			checkDate.setDate(checkDate.getDate() + 1);
		}
		firstValidDate = checkDate;
	}
	return firstValidDate;
}

AppointmentModel.find({appointmentTime: {$gt: new Date()}},  ) ;

if (existingAppointments.length < 1) {
	// the current appointment.appoitmentTime = firstValidDate
	// counter ++
}

else if (existingAppointments.length > 1) {
 // check address of submission against each existing appointments and if nearby existing && counter is < 4 place it on same day
}

else
	//schedule on first valid day after last apt


	// validApptDays = [1,2,3,4]; if only wishing to schedule appts on Mon - Thurs


*/

var AppointmentModel = module.exports = mongoose.model("appointment", appointmentSchema);

