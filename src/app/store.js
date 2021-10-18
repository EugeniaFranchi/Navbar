import { createStore } from "redux";
import { counterReducer } from "./reducers/CounterReducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(counterReducer, composeWithDevTools());
