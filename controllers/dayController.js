var moment = require ("moment");
var appointmentModel = require ("../models/appointmentModel");

var dateModifier = module.exports= {
	grabDate: function(req,res) {
		var appointment = appointmentModel.find({date: {$exists: true}}, function(err,docs){
			if (err) {
				throw err;
			}
			for (var i = 0; i < docs.length; i++) {
				console.log(moment(docs[i].date).format("ddd, MMM Do YYYY"));
			};
		});
		
	}
}
