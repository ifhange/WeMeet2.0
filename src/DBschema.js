const mongoose = require('mongoose');
//Connection
mongoose.connect('mongodb://localhost:27017/wemeet');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("Database Connected.");
});

//Schema
mongoose.model('Feedback', {
  msg: String,
  create_at: String
});