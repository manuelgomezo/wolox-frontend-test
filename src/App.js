import React, { useState } from 'react';

import { Header, Footer } from 'Components';

import 'Styles/main.scss';

function App() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div className="app">
      {showHeader && <Header />}
      <Footer />
    </div>
  );
}

export default App;
