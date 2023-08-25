import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from './provider/store/ui/store';
import { AppRouter } from './provider/router';
import { Oops } from '../widgets/oops';
import { LoadingSpinner } from '../shared/ui/loading-spinner/loading-spinner';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary fallback={<Oops type='error-boundary' />}>
      <Suspense fallback={<LoadingSpinner spinnerType='page' />}>
        <Provider store={store}>
          <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
          <RouterProvider router={AppRouter} />
        </Provider>
      </Suspense>
    </ErrorBoundary>
  );
}
