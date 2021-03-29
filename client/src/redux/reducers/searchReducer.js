import { SEARCH_COMPLETE, SEARCH_ITEM_SELECTED, SEARCH_ITEM_DESELECTED } from '../types';

const initialState = {
    selected: {
        food_name: null,
        serving_qty: null,
        nf_calories: null,
        nf_total_fat: null,
        nf_saturated_fat: null,
        nf_cholesterol: null,
        nf_sodium: null, nf_total_carbohydrate: null,
        nf_dietary_fiber: null,
        nf_sugars: null,
        nf_protein: null,
        nf_potassium: null,
    },
    commonResults: [],
    brandedResults: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_COMPLETE:
            return {
                ...state,
                commonResults: action.payload.common,
                brandedResults: action.payload.branded
            }
        case SEARCH_ITEM_SELECTED:
            return {
                ...state,
                selected: action.payload
            }
        case SEARCH_ITEM_DESELECTED:
            return {
                ...state,
                selected: {
                    food_name: null,
                    serving_qty: null,
                    nf_calories: null,
                    nf_total_fat: null,
                    nf_saturated_fat: null,
                    nf_cholesterol: null,
                    nf_sodium: null, nf_total_carbohydrate: null,
                    nf_dietary_fiber: null,
                    nf_sugars: null,
                    nf_protein: null,
                    nf_potassium: null,
                }
            }
        default:
            return {
                ...state
            }
    }
}