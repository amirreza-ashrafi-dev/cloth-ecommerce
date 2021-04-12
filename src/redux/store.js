import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
// redux-persist
import { persistStore } from "redux-persist";

const middleWares = [thunk];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persiststore = persistStore(store);
