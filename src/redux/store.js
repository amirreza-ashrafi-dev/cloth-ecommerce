import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
// redux-persist
import { persistStore } from "redux-persist";

const middleWares = [logger];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persiststore = persistStore(store);
