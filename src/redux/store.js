import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer, commentReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    cars: carReducer,
    users: userReducer,
    comments: commentReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};