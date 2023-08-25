import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../../../../shared/api/api';
import { rootReducer } from '../model/root-reducer';

export const axios = createAPI();

export const store = configureStore( {
  reducer: rootReducer,
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware( {
      thunk: {
        extraArgument: axios,
      },
    } ),
} );

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
