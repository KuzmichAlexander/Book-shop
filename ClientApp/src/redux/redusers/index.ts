import {combineReducers} from "redux";
//import {editBooksReduser} from "./booksReducers/editBooks";
import {fetchBookReduser} from "./booksReducers/fetchBooks";


export const rootReducer = combineReducers({
    fetchBook: fetchBookReduser
});

export type rootState = ReturnType<typeof rootReducer>;
