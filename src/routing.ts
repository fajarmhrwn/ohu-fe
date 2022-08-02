import React, { LazyExoticComponent } from 'react';

const DefPage = React.lazy(() =>
  import('@pages/Example').then((module) => ({ default: module.Example }))
);

const HomePage = React.lazy(() =>
  import('@pages/Homepage').then((module) => ({ default: module.Homepage }))
);

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
    title: 'Home Page',
    path: '/',
    component: HomePage,
  },
  PageNotFoundRouting,
];
