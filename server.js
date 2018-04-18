//modules
require('dotenv').config();
const express = require('express');
const apiRouter = require(__dirname + '/api-router');

//constants
const port = process.env.PORT? process.env.PORT:3000;
const appMode = process.env.APP_MODE? process.env.APP_MODE : 'development'; 

//express server setup 
var app = express();
app.use('/api', apiRouter); //let apiRouter handle api routing
app.use(express.static(__dirname + '/app'));

app.listen(port, function () {
  console.log('server listening on port ' + port + ' in ' + appMode + ' mode');
});