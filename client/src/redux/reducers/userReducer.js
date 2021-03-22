import { USER_LOGS_FETCHED } from '../types';

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
        default:
            return {
                ...state
            }
    }
}