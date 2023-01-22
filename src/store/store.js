import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import changeloginstate from "../Reducers/Loginreducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from "redux-thunk";

const persistConfig = {
    key : "persist-key",
    storage : AsyncStorage
}
const persistedReducer = persistReducer(persistConfig,changeloginstate)
const store = createStore(persistedReducer,applyMiddleware(thunk));
export const persistor = persistStore(store)
export default store;