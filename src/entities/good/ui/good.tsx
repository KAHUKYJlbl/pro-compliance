import cn from 'classnames';

import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { removeItem } from '../../../widgets/catalog';
import { StoredGoodType } from '../lib/types';

import classes from './good.module.sass';

type GoodProps = {
  item: StoredGoodType;
};

export const Good = ( { item }: GoodProps ): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.good}>
      <div className={cn( classes.name, { [classes.removed]: item.removed } )}>
        {item.good.name}
      </div>

      <div
        className={classes.remove}
        onClick={() => dispatch( removeItem( item ) )}
      >
        X
      </div>
    </div>
  );
};
