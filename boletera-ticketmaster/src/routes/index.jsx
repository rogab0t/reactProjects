import { Suspense } from "react";
import { mainRoute } from '../utils/constants';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from '../views/Home';
import Detail from '../views/Detail';
import Error404 from '../views/Error404';
import ErrorBoundary from "../components/Events/components/ErrorBoundary";

import Profile from '../views/Profile';
import MyInfo from "../views/Profile/components/MyInfo";
import LikedEvents from "../views/Profile/components/LikedEvents";

const router = createBrowserRouter([
  {
    path: mainRoute,
    element: <Home />,
    errorElement: <Error404 />
  },
  {
    path: `${mainRoute}detail/:eventId`,
    element: (
      <ErrorBoundary fallback={<div>Ha ocurrido un error al obtener el detalle :(</div>}>
          <Detail />
      </ErrorBoundary>
    )
  },
  {
    path: `${mainRoute}profile`,
    element: <Profile />,
    children: [
      {
        path: 'my-info',
        element: <MyInfo />
      },
      {
        path: 'liked-events',
        element: (
          <Suspense fallback={<div>Cargando Eventos...</div>}>
            <ErrorBoundary fallback={<div>Ha ocurrido un error al mostrar los eventos :(</div>}>
              <LikedEvents />
            </ErrorBoundary>
          </Suspense>
        )
      }
    ],
  }
]);

const Routes = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Routes;