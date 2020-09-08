import React, { useState, useEffect, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { doTranslate } from 'Utils/translate';
import config from 'config';
import './Menu.scss';

// Contexts
import { UserContext } from 'Contexts/UserContext';

import MenuData from './MenuData.json';

const printMenuItem = (item, index, auth) => {
  if (!item.restricted || (item.restricted && auth)) {
    switch (item.type) {
      case 'anchor':
        return (
          <li key={`menu.link${item.title}`} className={`menu__item ${item.class ? item.class : ''}`}>
            <Link to={{ pathname: item.link, hash: item.hash }}>{item.title}</Link>
          </li>
        );
      default:
        return (
          <li key={`menu.link_${item.title}`} className={`menu__item ${item.class ? item.class : ''}`}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        );
    }
  }
  return <></>;
};

const Menu = ({ location }) => {
  const { auth, logout } = useContext(UserContext);
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState();

  useEffect(() => {
    if (open) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div className={classnames('menu', { 'menu--active': open })}>
      <div className="menu__icon noDesktop">
        <button className="menu__hamburger menu__hamburger--collapse" type="button" onClick={() => setOpen(!open)}>
          <span className="menu__hamburger-box">
            <span className="menu__hamburger-inner" />
          </span>
        </button>
      </div>

      <ul className="menu__wrapper">
        {MenuData.map((item, index) => {
          const translatedItem = doTranslate(t, item);
          return printMenuItem(translatedItem, index, auth);
        })}

        {auth ? (
          <li key="menu.item__logout" className="menu__item menu__item--login">
            <button type="button" onClick={() => logout()}>
              {t('menu.logout')}
            </button>
          </li>
        ) : (
          <li key="menu.item__login" className="menu__item menu__item--login">
            <Link to="/login">{t('menu.login')}</Link>
          </li>
        )}

        <li key="menu.item__locales" className="menu__item menu__item--locales">
          <button type="button" onClick={() => i18n.changeLanguage('es')}>
            <img src={`${config.IMAGE_PROVIDER}images/es.png`} alt="WOLOX ES Locale" />
          </button>
          <button type="button" onClick={() => i18n.changeLanguage('en')}>
            <img src={`${config.IMAGE_PROVIDER}images/en.png`} alt="WOLOX EN Locale" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
