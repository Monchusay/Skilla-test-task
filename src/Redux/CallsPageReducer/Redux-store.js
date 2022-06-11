import { combineReducers, createStore } from "redux";
import CallsPageReducer from "./CallsPageReducer";

let reducers = combineReducers({
  CallsPage: CallsPageReducer,
});

let store = createStore(reducers);

export default store
