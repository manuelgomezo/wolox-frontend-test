import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import classnames from 'classnames';
import config from 'config';
import './Hero.scss';

const Hero = ({ images, type, alt, title, className, children }) => {
  const getSrc = (link, srcType) => {
    if (type === 'icon') return config.IMAGE_PROVIDER + 'icons/';
    else return config.IMAGE_PROVIDER + 'images/';
  };

  return (
    <div className={classnames('hero', className && [...className])}>
      <div className="hero__content">
        <ReactMarkdown source={children} escapeHtml={false} />
      </div>
      {images && (
        <div className="hero__image">
          <img src={getSrc(images[0], type) + images[0].src} alt={alt} />
        </div>
      )}
    </div>
  );
};

export default Hero;
