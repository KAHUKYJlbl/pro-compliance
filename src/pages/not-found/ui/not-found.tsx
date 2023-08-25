import { Link } from 'react-router-dom';
import classes from './not-found.module.sass';

export const NotFound = (): JSX.Element => (
  <Link to="/">
    <div className={classes.container404}>
      <figure className={classes.figure404}>
        <figcaption className={classes.figcaption404}>
          <span className={classes.e} />
          <span className={classes.r} />
          <span className={classes.r} />
          <span className={classes.o} />
          <span className={classes.r} />
          <span className={classes['_4']} />
          <span className={classes['_0']} />
          <span className={classes['_4']} />
          <span className={classes.n} />
          <span className={classes.o} />
          <span className={classes.t} />
          <span className={classes.f} />
          <span className={classes.o} />
          <span className={classes.u} />
          <span className={classes.n} />
          <span className={classes.d} />
        </figcaption>
      </figure>
    </div>
  </Link>
);
