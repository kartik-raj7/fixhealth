import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: lazy(() => import('./pages/homepage')),
        exact: true,
      },
  {
    path: '/home',
    component: lazy(() => import('./pages/homepage')),
    exact: true,
    preload: true, 
  },
];

export default routes;