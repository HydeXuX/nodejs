function getAllRests(callback) {

	var result = {
		status: "success",
		rests: [{ id: 1, name: "Burger King" },
		{ id: 2, name: "MacDonalod's" },
		{ id: 3, name: "Texas Road House" },
		{ id: 4, name: "Sushi place" }]
	};

	callback(null, result);
}

function getRest(id) {
	var result = { id: id, name: "Burger King" };
	return result;
}


module.exports = {
	getAllRests: getAllRests,
	getRest: getRest,
	createRest: createRest
};
