import { createStore, combineReducers } from 'redux'
import { counterReducer } from "./reducers/CounterReducers";
import { appReducer } from './reducers/AppReducers'
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    app: appReducer,
    count: counterReducer
  })

export default createStore(reducer, composeWithDevTools());
