import { ACTION_TYPES } from "../actions/productsAction";

const initialState = {
    list: [],
    singleProduct: {}
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        case ACTION_TYPES.FETCH_BY_ID:
            return {
                ...state,
                singleProduct: { ...action.payload }
            }

        case ACTION_TYPES.FETCH_BY_BRAND:
            console.log(action.brand)
            return {
                ...state,
                list: [...action.payload.filter(x => x.brand == action.brand)]
            }

        case ACTION_TYPES.FETCH_BY_CATEGORY:
            return {
                ...state,
                list: [...action.payload.filter(p => p.categoryId == action.category)]
            }

        case ACTION_TYPES.FETCH_BY_BRAND_CATEGORY:
            return {
                ...state,
                list: [...action.payload.filter(p => p.category == action.categoryId && p.brand == action.brand)]
            }

        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x.id == action.payload.id ? action.payload : x)
            }

        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x.id != action.payload)
            }

        default:
            return state;
    }
}