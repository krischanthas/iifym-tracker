import { USER_LOGGED_FOOD, LOG_ITEM_REMOVED, UPDATED_USER_PROFILE, USER_PROFILE_FETCHED } from '../types';

const initialState = {
    profile: {
        goals: null,
        logs: [],
        dailyLog: []
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_PROFILE_FETCHED:
            return {
                goals: action.payload.user.goals,
                logs: action.payload.logs,
                dailyLog: action.payload.logs.filter(log => {
                    const cur = new Date();
                    const curFormatted = cur.getFullYear() + '-' + cur.getMonth() + '-' + cur.getDate();

                    const dbDate = new Date(log.createdAt);
                    const dbDateFormatted = dbDate.getFullYear() + '-' + dbDate.getMonth() + '-' + dbDate.getDate();

                    if (curFormatted === dbDateFormatted) return log;
                    return false;
                })
            }
        case UPDATED_USER_PROFILE:
            return {
                ...state,
                goals: action.payload.goals
            }
        case USER_LOGGED_FOOD:
            return {
                ...state,
                dailyLog: [...state.dailyLog, action.payload],
                logs: [...state.logs, action.payload]
            }
        case LOG_ITEM_REMOVED:
            return {
                ...state,
                dailyLog: state.dailyLog.filter(log => log._id !== action.payload),
                logs: state.logs.filter(log => log._id !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
}