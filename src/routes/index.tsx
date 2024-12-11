import { createBrowserRouter } from 'react-router-dom';
import RouteChange from './RouteChange';
import { GameScreen, HomeScreen, MenuScreen } from '../page';
export const routes = createBrowserRouter([
  {
    element: <RouteChange />,
    children: [
      {
        path: '/pve',
        element: <HomeScreen />,
      },
      {
        path: '/game',
        element: <MenuScreen />,
      },
      {
        path: '/',
        element: <GameScreen />,
      },
    ],
  },
]);
