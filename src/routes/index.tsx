import { createBrowserRouter } from 'react-router-dom';
import {
  ErrorPage,
  GameOnlineScreen,
  GameScreen,
  HomeScreen,
  LoginPage,
  MenuScreen,
  SignUpPage,
  UserProfileScreen,
} from '../page';

import RouteChange from './RouteChange';
import ProtectedRoute from './ProtectedRoute';

import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';

export const routes = createBrowserRouter([
  {
    element: <RouteChange />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
      },
      {
        path: '/game',
        element: <MenuScreen />,
      },
      {
        path: `/pve`,
        element: <GameScreen />,
      },
      {
        path: '/user-profile',
        element: <UserProfileScreen />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
      { path: '/sso-callback', element: <AuthenticateWithRedirectCallback /> },
      {
        element: <ProtectedRoute />,
        children: [{ path: '/online', element: <GameOnlineScreen /> }],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
