var express = require('express');
var app = express();

var restController = require('/restController');

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
   extended: true
}));

app.post('/login', handleLogin);
app.post('/logout', handleLogout);
app.use(logRequest);
app.get('/getServerTime', verifyLogin, getServerTime);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + "/public"));

app.get('/rests', restController.handleRestList);
app.get('/rest/:id', restController.handleSingleRest);

app.post('/rest', function (request, response) {
   restController.getAllRests

});

app.listen(app.get('port'), function () {
   console.log("Now listening on port " + app.get('port'));
});
