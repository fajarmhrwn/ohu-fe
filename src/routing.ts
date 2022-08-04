import React, { LazyExoticComponent } from 'react';

const DefPage = React.lazy(() =>
  import('@pages/Example').then((module) => ({ default: module.Example }))
);

const PageNotFound = React.lazy(() =>
  import('@pages/PageNotFound').then((module) => ({
    default: module.PageNotFound,
  }))
);

const TourPage = React.lazy(() => 
  import('@pages/MapTour').then((module) => ({
    default: module.Tour
  }))
)

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
    title: 'OHU Tour',
    path: '/map-tour',
    component: TourPage
  },
  {
    title: 'Default Page',
    path: '/',
    component: DefPage,
  },
  PageNotFoundRouting,
];
