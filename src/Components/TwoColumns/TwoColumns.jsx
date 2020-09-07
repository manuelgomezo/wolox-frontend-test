import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import styled from 'styled-components';
import classnames from 'classnames';
import config from 'config';
import './TwoColumns.scss';

const TwoColumns = ({ data }) => {
  const BackgroundLeftDiv = styled.div`
    ${data.left.backgroundImage && `background: url(${`${config.IMAGE_PROVIDER}images/${data.left.backgroundImage}`});`}
    ${data.left.backgroundColor && `background-color: ${data.left.backgroundColor};`}
  `;

  const BackgroundRightDiv = styled.div`
    ${data.right.backgroundImage && `background: url(${`${config.IMAGE_PROVIDER}images/${data.right.backgroundImage}`});`}
    ${data.right.backgroundColor && `background-color: ${data.right.backgroundColor};`}
  `;

  return (
    <div className="two-columns">
      <div className={classnames('two-columns__column two-columns__left', data.left.class && data.left.class)}>
        <BackgroundLeftDiv className="two-columns__column__background" />
        <ReactMarkdown source={data.left.content} escapeHtml={false} />
      </div>
      <div className={classnames('two-columns__column two-columns__right', data.right.class && data.right.class)}>
        <BackgroundRightDiv className="two-columns__column__background" />
        <ReactMarkdown source={data.right.content} escapeHtml={false} />
      </div>
    </div>
  );
};

export default TwoColumns;
