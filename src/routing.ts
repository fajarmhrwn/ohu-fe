import React, { LazyExoticComponent } from 'react';

const DefPage = React.lazy(() =>
  import('@pages/Example').then((module) => ({ default: module.Example }))
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

const EventPage = React.lazy(() =>
  import('@pages/Event').then((module) => ({ default: module.HomePage }))
)

export const Routing: PageRouting[] = [
  {
    title: 'Default Page',
    path: '/',
    component: EventPage,
  },
  PageNotFoundRouting,
];


