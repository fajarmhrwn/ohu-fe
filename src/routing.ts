import React, { LazyExoticComponent } from 'react';

const DefPage = React.lazy(() =>
  import('@pages/Example').then((module) => ({ default: module.Example }))
);

const LegendPage = React.lazy(() =>
  import('@pages/Legend').then((module) => ({ default: module.Test }))
)

const PageNotFound = React.lazy(() =>
  import('@pages/PageNotFound').then((module) => ({
    default: module.PageNotFound,
  }))
);

interface PageRouting {
  title: string;
  path: string;
  component: LazyExoticComponent<any>;
}

const PageNotFoundRouting: PageRouting = {
  title: 'Page Not Found',
  path: '*',
  component: PageNotFound,
};

export const Routing: PageRouting[] = [
  {
    title: 'Default Page',
    path: '/',
    component: DefPage,
  },
  {
    title: 'Legend Page',
    path: '/legend-tour',
    component: LegendPage
  },
  PageNotFoundRouting,
];
