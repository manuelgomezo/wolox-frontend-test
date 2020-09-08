import React, { useState, useEffect, Suspense, lazy } from 'react';
import { withRouter, Switch } from 'react-router-dom';

// Components
import { Header, Footer, Portal, RouteComponent } from 'Components';

import 'Styles/main.scss';

// Pages
const Home = lazy(() => import('Pages/Home/Home'));
const Login = lazy(() => import('Pages/Login/Login'));
const TechList = lazy(() => import('Pages/TechList/TechList'));

function App({ location }) {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const scrollToHash = (hash) => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const headerOffset = 60;
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
    if (location.hash) {
      const tryToScroll = setTimeout(() => {
        if (!scrollToHash(location.hash)) tryToScroll();
      }, 50);
    }
  }, [location]);

  return (
    <div className="app">
      {showHeader && (
        <Portal divId="header">
          <Header setShowHeader={setShowHeader} />
        </Portal>
      )}
      <Suspense fallback={<div className="loading" />}>
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

export default withRouter(App);
