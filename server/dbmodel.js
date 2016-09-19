const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const challengeSchema = new Schema({
	_id: ObjectId,
	name: String,
	description: String,
	author: String,
	difficulty: String,
});

const Challenges = mongoose.model('Challenges', challengeSchema);
module.exports = Challenges;

//insert function
	// _id: ObjectId(),
	// name: 'blalblah',
	// ...