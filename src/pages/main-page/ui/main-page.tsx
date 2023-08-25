import { Navigate, generatePath } from 'react-router-dom';

import { AppRoute } from '../../../app/provider/router';

function MainPage(): JSX.Element {
  return <Navigate to={generatePath( AppRoute.Catalog )} />;
}

export default MainPage;
