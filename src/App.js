import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import { Header, Footer, Portal } from 'Components';

// Pages
import { Home } from 'Pages';

import 'Styles/main.scss';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
