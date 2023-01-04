const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Patient = new Schema(
	{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		dateOfBirth: {
			type: String,
			required: true,
		},
		sex: {
			// true = male
			// false = female
			type: Boolean,
			required: true,
			default: true,
		},
		// diseases: {
		// 	type: Array,
		// 	default: [],
		// },
		// score: {
		// 	type: Number,
		// 	required: true,
		// 	default: 0,
		// },
		// room: {
		// 	type: String,
		// 	required: true,
		// 	default: "noroom",
		// }
	}
);

module.exports = mongoose.model("patients", Patient);
