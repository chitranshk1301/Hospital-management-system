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
		diseases: {
			type: [String],
			required: true,
			default: [],
		}
	}
);

module.exports = mongoose.model("patients", Patient);
