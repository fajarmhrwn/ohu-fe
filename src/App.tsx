/* eslint-ignore */
import { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Loading } from '@components/common/Loading';
import { Routing } from './routing';
import ReactAudioPlayer from 'react-audio-player';
import BackgroundMusic from './assets/background-music.mp3';

function fixComponent<T>(component: T): T {
  return (component as any).default ?? component;
}
const ReactAudioPlayerComponent = fixComponent(ReactAudioPlayer);

const App = () => {
  const musicTrigger = () => {
    const music = document.getElementById(
      'backgroundMusic'
    ) as HTMLAudioElement;
    if (music != null) {
      music.play();
    }
  };

  return (
    <div onClick={musicTrigger}>
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
      <ReactAudioPlayerComponent
        id="backgroundMusic"
        src={BackgroundMusic}
        autoPlay={true}
        loop
      />
    </div>
  );
};

export default App;
