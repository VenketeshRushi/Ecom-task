import {
  combineReducers,
  applyMiddleware,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "../products/reducers";

const rootReducer = combineReducers({
  productReducer,
});

const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  createCompose(applyMiddleware(thunk))
);
