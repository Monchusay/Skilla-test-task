import {combineReducers, configureStore} from "@reduxjs/toolkit";
import CallsPageSlicer from "./CallsPageSlicer";

const rootReducer = combineReducers({
    CallsPage: CallsPageSlicer
})

const store = configureStore({
    reducer:rootReducer
})

export default store