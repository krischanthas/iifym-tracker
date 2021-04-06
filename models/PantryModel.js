const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PantryModel = new Schema({
    user_id: {
        type: String,
        isRequired: true
    },
    pantry_description: {
        type: String
    },
    pantry_items: {
        type: Array
    }

}, { typestamp: true })

module.exports = mongoose.model('PantryModel', PantryModel);