const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Disease = mongoose.Schema({
    name: {
        type: String,
        unique: true,
	   required: true 
    },
    symptoms: {
        type: [String],
        required: true
    },
    
    belongsToId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('diseases', Disease);