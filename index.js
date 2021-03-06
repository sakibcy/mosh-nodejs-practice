const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/db')();
require('./startup/logging')(); 
require('./startup/routes')(app);
require('./startup/prod')(app);
// require('./startup/config')();
// require('./startup/validation')();



const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;