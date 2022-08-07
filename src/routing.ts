import React, { LazyExoticComponent } from 'react';

const DefPage = React.lazy(() =>
  import('@pages/Example').then((module) => ({ default: module.Example }))
);

const TourPage = React.lazy(() => 
  import('@pages/PageTour').then((module) => ({
    default: module.Tour
  }))
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
    title: 'OHU Tour',
    path: '/tour',
    component: TourPage
  },
  PageNotFoundRouting,
];
