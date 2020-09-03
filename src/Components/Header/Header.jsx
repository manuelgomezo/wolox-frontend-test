import React from 'react';
import { Svg, Menu } from 'Components';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div class="header-background">
        <div class="header-background__image" />
        <div class="header-background__image header-background__image--delay" />
        <div class="header-background__image header-background__image--delay2" />
      </div>
      <div className="header__container max-width">
        <a href="/" className="header__logo">
          <Svg id="logo" />
        </a>
        <div className="header__menu">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
