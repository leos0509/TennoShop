const mongoose = require('mongoose');

const uri = 'mongodb+srv://baou0508:tennosayhi@shine-aura-test-db.pf0rcx6.mongodb.net/tennoshop?retryWrites=true&w=majority&appName=shine-aura-test-db';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

module.exports = mongoose;
