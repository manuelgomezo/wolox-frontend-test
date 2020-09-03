import React, { useState } from 'react';

import { Header, Footer, Portal } from 'Components';

import { Home } from 'Pages';

import 'Styles/main.scss';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <div className="app">
      {showHeader && (
        <Portal divId="header">
          <Header setShowHeader={setShowHeader} />
        </Portal>
      )}
      <Home />
      {showFooter && (
        <Portal divId="footer">
          <Footer setShowFooter={setShowFooter} />
        </Portal>
      )}
    </div>
  );
}

export default App;
