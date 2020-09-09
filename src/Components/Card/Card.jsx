import React from 'react';
import classnames from 'classnames';
import './Card.scss';

const Card = ({ className, title, image, children }) => {
  return (
    <div className={classnames('card', className)}>
      <div className="card__container">
        <div className="card__image">{image && <img src={image} alt={title} />}</div>
        <div className="card__content">
          <h2 className="card__title">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
