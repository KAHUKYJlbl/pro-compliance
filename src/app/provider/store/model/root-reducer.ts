import { combineReducers } from '@reduxjs/toolkit';

import { catalogSlice } from '../../../../widgets/catalog';
import { NameSpace } from '../lib/name-space';

export const rootReducer = combineReducers( {
  [NameSpace.Catalog]: catalogSlice.reducer,
} );
