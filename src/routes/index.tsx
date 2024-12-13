import { createBrowserRouter } from 'react-router-dom';
import RouteChange from './RouteChange';
import { GameScreen, HomeScreen, MenuScreen } from '../page';
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
    ],
  },
]);
