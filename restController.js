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


module.exports = {
	handleRestList: handleRestList,
	handleSingleRest: handleSingleRest
};
