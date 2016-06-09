var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restapidatabase');

/***** Routes for User CRUD ***********/
var userRoutes = require('./routes/user.js');

/** this will let us get the data from post **/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.port || 3000;


/** all routes prefixed with api **/
app.use('/api',userRoutes);

app.listen(port,function(){
	console.log('Magic happends at ',port);
});



