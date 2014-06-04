var validApptDayModel = require('../models/validApptDayModel');
var moment = require('moment');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});


