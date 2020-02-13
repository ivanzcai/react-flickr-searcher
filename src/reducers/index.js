const initState = {
    search: ""
};

export default function (state = initState, action) {

    if (!action) {
        return state;
    }

    switch (action.type) {
        case "SEARCH_SUCCESS":
            return { ...state, search: action.payload };

        case "SEARCH_FAILED":
            return { ...state, search: action.payload };

        default:
            return state;
            break;
    }
}
