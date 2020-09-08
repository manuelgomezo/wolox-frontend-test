import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <form className="login-form">
      <input type="text" className="input input--primary" placeholder="email" required />
      <input type="password" className="input input--primary" placeholder="password" required />
      <button type="submit" className="button button--primary">
        <span>Login</span>
      </button>
    </form>
  );
};

export default LoginForm;
