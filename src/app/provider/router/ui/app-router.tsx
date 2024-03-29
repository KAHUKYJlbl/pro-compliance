import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { MainPage } from '../../../../pages/main-page';
import { CatalogPage } from '../../../../pages/catalog-page';
import { NotFound } from '../../../../pages/not-found';

import { AppRoute } from '../lib/routes';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
      <Route
        path={AppRoute.Catalog}
        element={<CatalogPage />}
      />
    </>
  )
);
