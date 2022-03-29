const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');

module.exports = async function() {
    const db = config.get('db');
    mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => winston.info(`Connected to Database ${db}`));
    }   

// module.exports = connectDB;

