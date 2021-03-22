
export default (state = {}, action) => {
    switch (action.type) {
        case 'REDIRECT':
            return { redirectTo: action.payload };
        default:
            return state;
    }
};

