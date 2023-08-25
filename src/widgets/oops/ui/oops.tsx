import { Navigate } from 'react-router-dom';

import { AppRoute } from '../../../app/provider/router';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { fetchCatalog } from '../../catalog';

import classes from './oops.module.sass';

type OopsProps = {
  type: 'catalog' | 'error-boundary';
};

export function Oops( { type }: OopsProps ): JSX.Element {
  const dispatch = useAppDispatch();

  const handleOopsClick = () => {
    switch ( type ) {
      case 'catalog':
        dispatch( fetchCatalog() );
        break;
      case 'error-boundary':
        return <Navigate to={AppRoute.Main} />;
      default:
        break;
    }
  };

  return (
    <div className={classes.containeroops} onClick={handleOopsClick}>
      <figure className={classes.figureoops}>
        <figcaption className={classes.figcaptionoops} title="Try again">
          <span className={classes.o} />
          <span className={classes.o} />
          <span className={classes.p} />
          <span className={classes.s} />
          <span className={classes.wow} />
        </figcaption>
      </figure>
    </div>
  );
}
