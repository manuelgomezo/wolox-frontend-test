import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import axios from 'axios';

// Services
import Wolox from 'Services/Wolox';

// Contexts
import { UserContext } from 'Contexts/UserContext';

import './LoginForm.scss';

const LoginForm = () => {
  // Cancel token for LOGIN Request
  const controller = axios.CancelToken.source();
  // Login CONTEXT service.
  const { login } = useContext(UserContext);
  // Translation service
  const { t } = useTranslation();
  // State
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange' || 'onSubmit',
  });

  const onSubmit = (values) => {
    setError(null);
    setLoading(true);
    Wolox.login(
      values.email,
      values.password,
      (response) => {
        setLoading(false);
        if (response.status === 200) {
          if (response.data && response.data.token) login(response.data.token, values.stay);
          else setError('login.error');
        } else {
          setError('login.error');
        }
      },
      controller.token,
    );
  };

  useEffect(() => {
    return () => {
      controller.cancel();
    };
  }, []);

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>{t('login.title')}</h1>

      <div className={classnames('login-form__item', { 'login-form__item--error': errors.email })}>
        <input
          type="text"
          name="email"
          className="input input--primary"
          placeholder={t('login.email')}
          ref={register({
            required: 'login.required',
            pattern: {
              value: /[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/,
              message: 'login.invalidemail',
            },
          })}
          required
        />

        {errors.email && <div className="error-message">{t(errors.email.message)}</div>}
      </div>

      <div className={classnames('login-form__item', { 'login-form__item--error': errors.password })}>
        <input
          type="password"
          name="password"
          className="input input--primary"
          placeholder={t('login.password')}
          ref={register({
            required: 'login.required',
          })}
          required
        />
        {errors.password && <div className="error-message">{t(errors.password.message)}</div>}
      </div>

      <div className="login-form__item">
        <label htmlFor="stay">
          <input type="checkbox" id="stay" name="stay" ref={register()} />
          <span>{t('login.keeplogin')}</span>
        </label>
      </div>

      <button type="submit" className={classnames('button', 'button--primary', { 'button--loading': loading })} disabled={loading}>
        {!loading ? <span>{t('login.submit')}</span> : <div className="loading loading--alt" />}
      </button>

      {error && <div className="error-message">{t(error)}</div>}
    </form>
  );
};

export default LoginForm;
