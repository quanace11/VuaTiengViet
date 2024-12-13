import { createBrowserRouter } from 'react-router-dom';
import { GameScreen, HomeScreen, MenuScreen } from '../page';
import RouteChange from './RouteChange';
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
    ],
  },
]);
