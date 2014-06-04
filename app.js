var express = require('express');
var bodyParser = require('body-parser');
var AppointmentModel = require('./models/appointmentModel');
var validApptDayModel = require('./models/validApptDayModel');
var moment = require('moment');

var app = express();
var mongoose = require('mongoose');
var dayController = require('./controllers/dayController');

mongoose.connect('mongodb://localhost/appointments');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});



app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/appointments', function(req, res){
	res.render('appointments')
});

app.get('/contact', function(req, res){
	res.render('contact')
});

app.get('/grabDate', dayController.grabDate);

app.get('/test',function(req,res){
	AppointmentModel.find({appointmentTime: {$gt: new Date().getTime()}}, function(err, docs){
		for (var i = 0; i < docs.length; i++) {
			var fullAddress = (docs[i].streetNumber + " " + docs[i].street + " " + docs[i].postalCode);
			console.log(fullAddress);
		};
		res.send(docs);
	} ) ;
})


app.post('/appointment', function(req, res){
	var newAppt = new appointmentModel({

	streetNumber: req.body.streetNumber,
	street: req.body.street,
	city: req.body.city,
	state: req.body.state,
	postalCode: req.body.postalCode,
	country: req.body.country,
	emailAddress: req.body.emailAddress,
	phone: req.body.phone,
	apiKey: req.body.apiKey
	});




	newAppt.save(function (err, doc){
		// return done(err, doc)
		  if (err) console.error(err);
		  res.redirect('/');
	})

})


var server = app.listen(6073, function() {
	console.log('Express server listening on port ' + server.address().port);
});


