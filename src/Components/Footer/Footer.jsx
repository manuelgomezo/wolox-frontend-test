import React from 'react';
import './Footer.scss';
import config from 'config';

const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-background">
        <div class="footer-background__image" />
      </div>

      <div className="footer__logo">
        <img src={config.IMAGE_PROVIDER + 'icons/Ic_wolox_footer.svg'} alt="WOLOX" />
      </div>
    </div>
  );
};

export default Footer;
