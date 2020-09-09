import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import classnames from 'classnames';
import config from 'config';
import './TwoColumns.scss';

const getImageStyles = (image) => {
  const backgroundImage = image.backgroundImage && `url(${config.IMAGE_PROVIDER}images/${image.backgroundImage})`;
  return { backgroundImage, backgroundColor: image.backgroundColor };
};

const TwoColumns = ({ data }) => {
  const { left, right } = data;
  const leftImageStyles = getImageStyles(left);
  const rightImageStyles = getImageStyles(right);

  return (
    <div className="two-columns">
      <div className={classnames('two-columns__column two-columns__left', data.left.class && data.left.class)}>
        <div className="two-columns__column__background" style={leftImageStyles} />
        <ReactMarkdown source={data.left.content} escapeHtml={false} />
      </div>
      <div className={classnames('two-columns__column two-columns__right', data.right.class && data.right.class)}>
        <div className="two-columns__column__background" style={rightImageStyles} />
        <ReactMarkdown source={data.right.content} escapeHtml={false} />
      </div>
    </div>
  );
};

export default TwoColumns;
