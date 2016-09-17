const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const challengeSchema = new Schema({
	_id: Number,
	name: String,
	description: String,
	author: String,
	difficulty: String,
});

const Challenges = mongoose.model('Challenges', challengeSchema);
module.exports = Challenges;
