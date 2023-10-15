import { persistStore} from 'redux-persist'
import { persistedContactReducer } from './contactsSlice'
import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from "./fIlterSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store);
