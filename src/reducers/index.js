const initState = {
    search: ""
};

export default function (state = initState, action) {

    if (!action) {
        return state;
    }

    let count

    switch (action.type) {
        case "SEARCH":
            console.log("search action")
            return { ...state };


        default:
            return state;
            break;
    }

}
