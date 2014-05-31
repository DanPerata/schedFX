var express = require('express');
var bodyParser = require('body-parser');
var appointmentModel = require('./models/appointmentModel');
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

app.get('/schedSnip', function(req, res){
	res.render('schedSnip')
});

app.get('/grabDate', dayController.grabDate);

app.get('/test',function(req,res){
	appointmentModel.find({$gt: {appointmentTime: moment()}, $lt: {appointmentTime:moment().add("weeks", 3)}}, function(err,appointments){
	console.log(appointments);
	res.send(appointments);
})
		// appointmentModel.find({},function(err,appointments){
		// 	console.log(appointments);
		// })
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


