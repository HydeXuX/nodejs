var restModel = require('../restModel');

function handleRestList(request, response) {
	console.log("Returning the restaurant list");

	restModel.getAllrests(function (error, result) {
		response.json(result);
	});
}

function handleSingleRest(request, response) {
	var id = request.params.id;

	console.log("Returning details for restaurant: " + id);

	var result = restModel.getRest(id);
	response.json(result);
}

function handleLogin(request, response) {
	var result = { success: false };

	if (request.body.username == "admin" && request.body.password == "password") {
		request.session.user = request.body.username;
		result = { success: true };
	}

	response.json(result);
}

function getServerTime(request, response) {
	var time = new Date();

	var result = { success: true, time: time };
	response.json(result);
}

function handleLogout(request, response) {
	var result = { success: false };

	if (request.session.user) {
		request.session.destroy();
		result = { success: true };
	}

	response.json(result);
}
function getServerTime(request, response) {
	var time = new Date();

	var result = { success: true, time: time };
	response.json(result);
}


function verifyLogin(request, response, next) {
	if (request.session.user) {

		next();
	} else {
		var result = { success: false, message: "Access Denied" };
		response.status(401).json(result);
	}
}


function logRequest(request, response, next) {
	console.log("Received a request for: " + request.url);
	next();
}
module.exports = {
	handleRestList: handleRestList,
	handleSingleRest: handleSingleRest
};
