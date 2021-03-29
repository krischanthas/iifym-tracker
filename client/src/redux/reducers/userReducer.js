import { USER_LOGS_FETCHED, USER_LOGGED_FOOD, LOG_ITEM_REMOVED } from '../types';

const initialState = {
    profile: {
        info: null,
        logs: []
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOGS_FETCHED:
            return {
                logs: action.payload
            }
        case USER_LOGGED_FOOD:
            return {
                ...state,
                logs: [...state.logs, action.payload]
            }
        case LOG_ITEM_REMOVED:
            return {
                ...state,
                logs: state.logs.filter(log => log._id !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
}