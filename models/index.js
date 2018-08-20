const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/infavos');

const db = mongoose.connection;

db.once('open', () => console.log('MongoDB is connected'));

db.on('error', () => console.log('MongoDB error'));

return db;