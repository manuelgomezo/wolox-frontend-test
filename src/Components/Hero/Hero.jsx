import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import classnames from 'classnames';
import config from 'config';
import './Hero.scss';

const Hero = ({ images, type, title, className, children }) => {
  const getSrc = (srcType) => {
    if (srcType === 'icon') return `${config.IMAGE_PROVIDER}icons/`;
    return `${config.IMAGE_PROVIDER}images/`;
  };

  return (
    <div className={classnames('hero', className && [...className])}>
      <div className="hero__content">
        <ReactMarkdown source={children} escapeHtml={false} />
      </div>
      {images && (
        <div className="hero__image">
          <img src={getSrc(type) + images[0].src} alt={title} />
        </div>
      )}
    </div>
  );
};

export default Hero;
