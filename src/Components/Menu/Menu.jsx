import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import MenuData from './MenuData';
import './Menu.scss';

const Menu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState();

  useEffect(() => {
    if (open) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [open]);

  const handleButton = (title) => {
    switch (title) {
      default:
        return;
    }
  };

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
          switch (item.type) {
            case 'button':
              return (
                <li key={`menu.button${index}`} className="menu__item menu__item--button">
                  <button onClick={() => handleButton(item.title)}>{t(item.title)}</button>
                </li>
              );
            default:
              return (
                <li key={`menu.link${index}`} className={`menu__item ${item.class ? item.class : ''}`}>
                  <a href={item.link}>{t(item.title)}</a>
                </li>
              );
          }
        })}
      </ul>
    </div>
  );
};

export default Menu;
