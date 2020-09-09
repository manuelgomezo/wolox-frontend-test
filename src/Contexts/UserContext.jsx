import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

const UserContextContainer = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.getItem('auth') || false);

  const login = (token, save) => {
    if (save) {
      localStorage.setItem('auth', token);
    }
    setAuth(token);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setAuth(false);
  };

  const store = {
    auth,
    login,
    logout,
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export default UserContextContainer;
