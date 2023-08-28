import { StoredGoodType } from '../../../entities/good';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { removeItem } from '../../../widgets/catalog';

import classes from './remove.module.sass';

type RemoveProps = {
  item: StoredGoodType;
};

export const Remove = ( { item }: RemoveProps ): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={classes.remove}
      onClick={() => dispatch( removeItem( item ) )}
    >
      X
    </div>
  );
};
