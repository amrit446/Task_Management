const mongoose = require('mongoose');

const connectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const connectDb = async function () {
	mongoose.connect("mongodb://localhost:27017/kanban", connectionOptions, (err) => {
		if (err) {
			console.log('Something went wrong', err);
		}
	});

	mongoose.connection.on('connected', () => {
		console.log('Connected to Database');
	});
};

module.exports = connectDb;
