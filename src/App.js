import React, { useState, useEffect, useContext, Suspense, lazy } from 'react';
import { Switch, useHistory, useLocation } from 'react-router-dom';

// Components
import { Header, Footer, Portal, RouteComponent, Loading } from 'Components';

// Contexts
import { UserContext } from 'Contexts/UserContext';

import 'Styles/main.scss';

// Pages
const Home = lazy(() => import('Pages/Home/Home'));
const Login = lazy(() => import('Pages/Login/Login'));
const TechList = lazy(() => import('Pages/TechList/TechList'));

function App() {
  const { auth } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const scrollToHash = (hash) => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const headerOffset = 120;
          const elementPosition = element.offsetTop - headerOffset;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }, 150);
        return true;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (location && location.hash) {
      const tryToScroll = setTimeout(() => {
        if (!scrollToHash(location.hash)) tryToScroll();
      }, 50);
    }
  }, [location]);

  useEffect(() => {
    if (auth) history.push('/techlist');
  }, [auth, history]);

  return (
    <div className="app">
      {showHeader && (
        <Portal divId="header">
          <Header setShowHeader={setShowHeader} />
        </Portal>
      )}
      <Suspense fallback={<Loading />}>
        <Switch>
          <RouteComponent exact path="/" component={Home} />
          <RouteComponent exact path="/login" component={Login} />
          <RouteComponent exact path="/techlist" restricted component={TechList} />
        </Switch>
      </Suspense>
      {showFooter && (
        <Portal divId="footer">
          <Footer setShowFooter={setShowFooter} />
        </Portal>
      )}
    </div>
  );
}

export default App;
