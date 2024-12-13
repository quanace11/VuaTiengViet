import { createBrowserRouter } from 'react-router-dom';
import RouteChange from './RouteChange';
import { GameScreen, HomeScreen, MenuScreen } from '../page';
import LoginPage from '../page/loginScreen';
import UserProfileScreen from '../page/userScreen';
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
        path: `/pve/:id`,
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
    ],
  },
]);
