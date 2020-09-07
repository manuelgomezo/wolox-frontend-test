import React from 'react';
import { useTranslation } from 'react-i18next';
import config from 'config';
import './Footer.scss';

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-background">
        <div className="footer-background__image" />
        <div className="footer-background__image footer-background__image--delay" />
        <div className="footer-background__image footer-background__image--delay2" />
      </div>

      <div className="footer__logo">
        <img src={`${config.IMAGE_PROVIDER}icons/ic_wolox_footer.svg`} alt="WOLOX" />
      </div>

      <div className="footer__locales">
        <button type="button" onClick={() => i18n.changeLanguage('es')}>
          <img src={`${config.IMAGE_PROVIDER}images/es.png`} alt="WOLOX ES Locale" />
        </button>
        <button type="button" onClick={() => i18n.changeLanguage('en')}>
          <img src={`${config.IMAGE_PROVIDER}images/en.png`} alt="WOLOX EN Locale" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
