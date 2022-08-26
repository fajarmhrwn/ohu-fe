import { Suspense, useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Loading } from '@components/common/Loading';
import ReactAudioPlayer from 'react-audio-player';
import { Routing } from './routing';
import BackgroundMusic from './assets/background-music.mp3';
import { UserContext } from './context';
import APIClient from './util/api-client';

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
      if (JSON.parse(localStorage.getItem('isMute') || '')) {
        return;
      }
      music.play();
    }
  };

  const [isLoggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    APIClient.checkToken()
      .then((result) => {
        setUser(result);
        setLoggedIn(Object.keys(result).length > 0);
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }, [isLoggedIn]);

  return (
    // eslint-disable-next-line
    <div onClick={musicTrigger}>
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
          {/* eslint-disable-next-line */}
          <UserContext.Provider value={{ user, setUser, setLoggedIn }}>
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
          </UserContext.Provider>
        </AnimatePresence>
      </BrowserRouter>
      <ReactAudioPlayerComponent
        id="backgroundMusic"
        src={BackgroundMusic}
        autoPlay
        loop
      />
    </div>
  );
};

export default App;
