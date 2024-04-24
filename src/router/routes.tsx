import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />
  }
];
