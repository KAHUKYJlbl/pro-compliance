import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, State } from '../../../app/provider/store';
import { StoredGoodType } from '../../../entities/good';
import { FetchStatus } from '../../../shared/types/fetch-status';

export const getCatalog = createSelector(
  ( state: State ): StoredGoodType[] => state[NameSpace.Catalog].catalog,
  ( catalog ) => [...catalog].sort( ( a, b ) => {
    if ( ( a.removed && b.removed ) || ( !a.removed && !b.removed ) ) {
      return 0;
    }

    if ( a.removed && !b.removed ) {
      return 1;
    }

    if ( !a.removed && b.removed ) {
      return -1;
    }

    return 0;
  } )
);

export const getCatalogLoadingStatus = createSelector(
  ( state: State ): FetchStatus => state[NameSpace.Catalog].catalogLoadingStatus,
  ( status ) => ( {
    isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes( status ),
    isSuccess: status === FetchStatus.Success,
    isFailed: status === FetchStatus.Failed,
  } )
);
