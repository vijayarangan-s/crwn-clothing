import { combineReducers } from "redux";
import { userReducer, cartReducer, directoryReducer, shopReducer } from "./index";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collections: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
