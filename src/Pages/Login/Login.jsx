import React, { Suspense, lazy } from 'react';
import './Login.scss';

import { Loading } from 'Components';

const LoginForm = lazy(() => import('Components/LoginForm/LoginForm'));

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <Suspense fallback={<Loading />}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
};

export default Login;
