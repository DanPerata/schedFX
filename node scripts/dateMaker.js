var appointmentModel = require('./models/appointmentModel'); // Date model
var moment = require('moment');
mongoose.connect('mongodb://localhost/appointments');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});

// write what you want your script to do