const axios = require('axios');
require('dotenv').config();

const configHeaders = {
    'x-app-id': process.env.NUTRITIONIX_API_ID,
    'x-app-key': process.env.NUTRITIONIX_API_KEY,
    'Content-Type': 'application/JSON',
    'x-remote-user-id': 0
}

module.exports.callNutritionixInstantEndpoint = axios.create({
    baseURL: 'https://trackapi.nutritionix.com/v2/search/instant',
    headers: configHeaders
});

module.exports.callNutritionixNutrientEndpoint = axios.create({
    baseURL: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    headers: configHeaders
});

module.exports.callNutritionixItemEndpoint = axios.create({
    baseURL: 'https://trackapi.nutritionix.com/v2/search/item',
    headers: configHeaders
});