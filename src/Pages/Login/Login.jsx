import React, { Suspense, lazy } from 'react';
import './Login.scss';

const LoginForm = lazy(() => import('Components/LoginForm/LoginForm'));

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <Suspense fallback={<div className="loading" />}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
};

export default Login;
