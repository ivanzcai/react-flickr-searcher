import { transformer } from '../Services/transformer'
const initState = {
    selectedTags: [],
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

        case "UPDATE_SELECTED_TAGS":
            let tagsStr = action.payload.replace(/[ ,;]+/g, ",");
            let tagArray = tagsStr.split(",");

            return { ...state, selectedTags: tagArray };

        default:
            return state;
            break;
    }
}
