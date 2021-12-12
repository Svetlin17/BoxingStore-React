import { ACTION_TYPES } from "../actions/productsAction";

const initialState = {
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