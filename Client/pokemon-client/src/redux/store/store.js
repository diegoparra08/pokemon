import { createStore, applyMiddleware,compose } from 'redux';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import reducer from '../reducer/reducer';
import { thunk } from 'redux-thunk';



const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root", 
  storage, 
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk))   
);

const persistor = persistStore(store)

export {store, persistor};