import { USER_SIGN_ON, USER_SIGN_OFF } from '../types';

const initialState = {
    isAuthUser: false,
    isLoading: false,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_SIGN_ON:
            return {
                isAuthUser: true,
                isLoading: false,
                // token: action.payload.token,

                user: action.payload,
            }
        case USER_SIGN_OFF:
            return {
                isAuthUser: false,
                isLoading: false,
                user: null
            }
        default:
            return {
                ...state
            }
    }
}