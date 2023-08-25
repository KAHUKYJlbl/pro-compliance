import { useEffect } from 'react';

import { useAppDispatch } from '../../../../shared/lib/hooks/use-app-dispatch';
import { useAppSelector } from '../../../../shared/lib/hooks/use-app-selector';
import { fetchCatalog } from '../../model/api-actions/fetch-catalog';
import { getCatalog } from '../../model/catalog-selectors';

export const useCatalog = () => {
  const dispatch = useAppDispatch();
  const catalog = useAppSelector( getCatalog );

  useEffect( () => {
    dispatch( fetchCatalog() );
  }, [dispatch] );

  return catalog;
};
