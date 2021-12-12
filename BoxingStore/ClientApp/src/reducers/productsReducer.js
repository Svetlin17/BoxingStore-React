import { ACTION_TYPES } from "../actions/productsAction";

const initialState = {
    searchBrand: '',
    list: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        default:
            return state;
    }
}

export default function searchSimple(state = initialState, action) {
    switch (action.type) {
        case SEARCH_BRAND:
            return Object.assign({}, state, {
                searchBrand: action.text
            });
    }
}