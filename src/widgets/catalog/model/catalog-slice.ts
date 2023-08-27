import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCatalog } from './api-actions/fetch-catalog';

import { NameSpace } from '../../../app/provider/store';
import { FetchStatus } from '../../../shared/types/fetch-status';
import { StoredGoodType } from '../../../entities/good';

type InitialState = {
  catalogLoadingStatus: FetchStatus;
  catalog: StoredGoodType[];
};

const initialState: InitialState = {
  catalogLoadingStatus: FetchStatus.Idle,
  catalog: [],
};

export const catalogSlice = createSlice( {
  name: NameSpace.Catalog,
  initialState,
  reducers: {
    removeItem: ( state, action: PayloadAction<StoredGoodType> ) => {
      state.catalog = [
        ...state.catalog.filter( ( item ) => item.good.id !== action.payload.good.id ),
        {
          good: action.payload.good,
          removed: true,
        }
      ];
    },
  },
  extraReducers( builder ) {
    builder
      .addCase( fetchCatalog.fulfilled, ( state, action ) => {
        state.catalogLoadingStatus = FetchStatus.Success;
        state.catalog = action.payload.map( ( item ) => (
          {
            good: item,
            removed:
              state.catalog.find( ( storeItem ) => storeItem.good.id === item.id )?.removed
              || false
            ,
          }
        ) );
      } )
      .addCase( fetchCatalog.pending, ( state ) => {
        state.catalogLoadingStatus = FetchStatus.Pending;
      } )
      .addCase( fetchCatalog.rejected, ( state ) => {
        state.catalogLoadingStatus = FetchStatus.Failed;
      } );
  }
} );

export const { removeItem } = catalogSlice.actions;
