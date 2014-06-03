var validApptDayModel = require('../models/validApptDayModel');
var moment = require('moment');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});

	var validApptDays = [1,2,3,4];

	var dayOfSubmission = new Date();
	var checkDate = dayOfSubmission + 1;
	var firstValidDate; 


	if (checkDate.getUTCDay() < 5) {
		firstValidDate = checkDate;
	}
	else if (checkDate >= 5) {
		while (checkDate.getUTCDay() !== 1){
			checkDate = checkDate + 1;
		}
		firstValidDate = checkDate;
	}
