import { lazy } from 'react';

import globals from './globals';

const components = {
  home: lazy(() => import('pages/Home')),
  notFound: lazy(() => import('pages/NotFound')),
};

export const routes = [
  {
    ...globals.pages.home,
    component: components.home,
  },
  {
    ...globals.pages.notFound,
    component: components.notFound,
  },
];
