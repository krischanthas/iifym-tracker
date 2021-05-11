const { callNutritionixInstantEndpoint, callNutritionixNutrientEndpoint, callNutritionixItemEndpoint } = require('../keys/nutritionix');

module.exports.searchFood = (req, res) => {
    const searchedFood = req.body.searchedFood;
    callNutritionixInstantEndpoint.get('/', {
        params: {
            query: searchedFood
        }
    }).then((results) => {
        return res.status(200).json({ nutritionixInstantData: results.data });
    }).catch((err) => console.log(err));
}


module.exports.searchFoodNutrients = (req, res) => {
    const searchedFood = req.body.searchedFood;
    callNutritionixNutrientEndpoint.post('/', {
        query: searchedFood
    }).then((results) => {
        return res.status(200).json({ nutritionixNutrientsData: results.data.foods[0] });
    }).catch((err) => console.log(err));

}

module.exports.searchBrandedFoodItem = (req, res) => {
    const itemId = req.body.itemId;
    callNutritionixItemEndpoint.get('/', {
        params: {
            nix_item_id: `${itemId}`
        }
    }).then((results) => {
        return res.status(200).json({ nutritionixInstantData: results.data });
    }).catch((err) => console.log(err));
}
