var mongoose = require('mongoose');
var {config} = require('../../config/config');

var mongoDB = `mongodb://${config.mongoDbConfig.host}:${config.mongoDbConfig.port}/${config.mongoDbConfig.username}`;

mongoose.connect(mongoDB);


mongoose.Promise = global.Promise;

export var db = mongoose.connection;

db.on('connected', function(){
	console.log("Database connected !");
})

db.on('error', function(error){
	console.log("error",error);
})