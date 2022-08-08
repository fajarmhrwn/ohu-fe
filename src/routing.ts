import React, { LazyExoticComponent } from 'react';

const DefPage = React.lazy(() =>
  import('@pages/Homepage').then((module) => ({ default: module.Homepage }))
);

const PageNotFound = React.lazy(() =>
  import('@pages/PageNotFound').then((module) => ({
    default: module.PageNotFound,
  }))
);

const Leaderboards = React.lazy(() => 
  import('@pages/Leaderboards').then((module) => ({
    default: module.Leaderboards,
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
  {
    title: 'OHU Leaderboards',
    path: '/leaderboards',
    component: Leaderboards
  },
  PageNotFoundRouting,
];


