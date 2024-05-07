import { lazy } from 'react';

import globals from './globals';

const components = {
  home: lazy(() => import('pages/Home')),
  auth: lazy(() => import('./Auth')),
  notFound: lazy(() => import('pages/NotFound')),
};

export const routes = [
  {
    ...globals.pages.home,
    component: components.home,
  },
  {
    ...globals.pages.auth,
    component: components.auth,
  },
  {
    ...globals.pages.notFound,
    component: components.notFound,
  },
];
