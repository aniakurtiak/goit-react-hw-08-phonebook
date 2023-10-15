import { persistStore} from 'redux-persist'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { filterReducer } from "./fIlterSlice";
import { contactsSlice } from "./contactsSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'contacts',
  storage,
  whiteList: "contacts"
}

export const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterReducer,
});


export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store);