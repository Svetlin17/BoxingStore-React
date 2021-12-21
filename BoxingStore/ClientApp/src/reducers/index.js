import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { cartProductsReducer } from "./cartProductsReducer";
import { usersReducer } from "./usersReducer";

export const reducers = combineReducers({
    productsReducer,
    cartProductsReducer,
    usersReducer
})