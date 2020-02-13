import { transformer } from '../services/transformer'
const initState = {
    cardItems: ""
};

export default function (state = initState, action) {

    if (!action) {
        return state;
    }

    switch (action.type) {
        case "SEARCH_SUCCESS":
            let results = transformer(action.payload.items);

            return { ...state, cardItems: results };

        case "SEARCH_FAILED":
            return { ...state, cardItems: results };

        default:
            return state;
            break;
    }
}
