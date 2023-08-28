import cn from 'classnames';
import { Remove } from '../../../features/remove';

import { StoredGoodType } from '../lib/types';

import classes from './good.module.sass';

type GoodProps = {
  item: StoredGoodType;
};

export const Good = ( { item }: GoodProps ): JSX.Element => (
  <div className={classes.good}>
    <div className={cn( classes.name, { [classes.removed]: item.removed } )}>
      {item.good.name}
    </div>

    <Remove item={item} />
  </div>
);
