import { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Routing } from './routing';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
