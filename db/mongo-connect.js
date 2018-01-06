var mongoose = require('mongoose');
var mongoURI = process.env.MONGO_URI || 'mongodb://test:test@ds137957.mlab.com:37957/udemy-todo';
mongoose.connect(mongoURI, () => {
  console.log('connected to MLab db');
});

module.exports = {mongoose};
