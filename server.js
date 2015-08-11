var express = require('express');
var app = express();
app.listen(7000, function(){
	console.log("server running on port 7000");
});
process.on('uncaughtException', function (err) {
    console.log(err);
}); 

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json())
app.use(express.static(__dirname + "/client"))
//Mongoose
require('./server/config/mongoose.js');
//HTTP Routes
require('./server/config/routes.js')(app);

