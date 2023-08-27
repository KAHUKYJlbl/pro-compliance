import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createAPI } from '../../../../shared/api/api';
import { rootReducer } from '../model/root-reducer';

export const axios = createAPI();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer( persistConfig, rootReducer );

export const store = configureStore( {
  reducer: persistedReducer,
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware( {
      thunk: {
        extraArgument: axios,
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    } ),
} );

export const persistor = persistStore( store );

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
