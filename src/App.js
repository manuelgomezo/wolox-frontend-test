import React, { useState } from 'react';

import { Header, Footer, Portal } from 'Components';

import 'Styles/main.scss';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setFooter] = useState(true);

  return (
    <div className="app">
      {showHeader && (
        <Portal divId="header">
          <Header />
        </Portal>
      )}
      APP content
      {showFooter && (
        <Portal divId="footer">
          <Footer />
        </Portal>
      )}
    </div>
  );
}

export default App;
