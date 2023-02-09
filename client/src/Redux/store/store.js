import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "../products/reducers";

const rootReducer = combineReducers({
  productReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
