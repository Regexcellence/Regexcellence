const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const challengeSchema = new Schema({
	_id: Number,
	name: String,
	description: String,
	author: String,
	difficulty: String
})

let Challenges = mongoose.model('Challenges', challengeSchema);
module.exports = Challenges;