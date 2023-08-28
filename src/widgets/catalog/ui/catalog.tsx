import { Good } from '../../../entities/good';
import { Add } from '../../../features/add';
import { useAppSelector } from '../../../shared/lib/hooks/use-app-selector';
import { LoadingSpinner } from '../../../shared/ui/loading-spinner/loading-spinner';

import { getCatalogLoadingStatus } from '../model/catalog-selectors';
import { useCatalog } from '../lib/hooks/use-catalog';
import classes from './catalog.module.sass';

export const Catalog = (): JSX.Element => {
  const catalog = useCatalog();
  const catalogLoadingStatus = useAppSelector( getCatalogLoadingStatus );

  if ( catalogLoadingStatus.isLoading ) {
    return <LoadingSpinner spinnerType="page" />;
  }

  return (
    <>
      <Add />

      <div className={classes.catalog}>
        {
          catalog.map( ( element ) =>
            <Good key={element.good.id} item={element} />
          )
        }
      </div>
    </>
  );
};
