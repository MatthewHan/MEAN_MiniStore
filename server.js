var express = require('express');
var app = express();
app.listen(8000, function(){
	console.log("server running on port 8000");
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

