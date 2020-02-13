const initState = {
    search: ""
};

export default function (state = initState, action) {

    if (!action) {
        return state;
    }

    switch (action.type) {
        case "SEARCH":
            return { ...state, search: action.payload };


        default:
            return state;
            break;
    }
}
