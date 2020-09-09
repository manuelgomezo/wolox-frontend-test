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

  const renderSrcSet = (imageList) => {
    if (imageList) {
      if (imageList.length > 1) {
        let imageStringArray = '';
        imageList.forEach((item, index) => {
          if (item.size) {
            const imageLink = getSrc(type) + item.src;
            if (index === 0) imageStringArray += `${imageLink} ${item.size}, `;
            else if (index === imageList.length - 1) imageStringArray += `${imageLink} ${item.size}`;
            else imageStringArray += `${imageLink} ${item.size}, `;
          }
        });
        return imageStringArray;
      }
      return getSrc(type) + imageList[0].src;
    }
    return '';
  };

  return (
    <div className={classnames('hero', className && [...className])}>
      <div className="hero__content">
        <ReactMarkdown source={children} escapeHtml={false} />
      </div>
      {images && (
        <div className="hero__image">
          <img src={getSrc(type) + images[0].src} srcSet={type === 'image' ? renderSrcSet(images) : ''} alt={title} />
        </div>
      )}
    </div>
  );
};

export default Hero;
