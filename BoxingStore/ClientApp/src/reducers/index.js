import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { cartProductsReducer } from "./cartProductsReducer";
import { usersReducer } from "./usersReducer";
import { ordersReducer } from "./ordersReducer";

export const reducers = combineReducers({
    productsReducer,
    cartProductsReducer,
    usersReducer,
    ordersReducer
})