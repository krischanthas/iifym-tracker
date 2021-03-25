import { SEARCH_COMPLETE } from '../types';

const initialState = {
    selected: null,
    commonResults: [],
    brandedResults: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_COMPLETE:
            return {
                commonResults: action.payload.common,
                brandedResults: action.payload.branded
            }

        default:
            return {
                ...state
            }
    }
}