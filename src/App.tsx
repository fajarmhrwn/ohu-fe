/* eslint-ignore */
import { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Loading } from '@components/common/Loading';
import { Routing } from './routing';

const App = () => (
  <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
      <Routes>
        {Routing.map((route) => {
          const Component = route.component;
          return (
            <Route
              caseSensitive
              path={route.path}
              key={route.path}
              element={
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </AnimatePresence>
  </BrowserRouter>
);

export default App;
