import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import styled from 'styled-components';
import classnames from 'classnames';
import config from 'config';
import './TwoColumns.scss';

const BackgroundLeftDiv = styled.div`
  ${(props) => props.backgroundImage && `background: url(${`${config.IMAGE_PROVIDER}images/${props.backgroundImage}`});`}
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`;

const BackgroundRightDiv = styled.div`
  ${(props) => props.backgroundImage && `background: url(${`${config.IMAGE_PROVIDER}images/${props.backgroundImage}`});`}
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`;

const TwoColumns = ({ data }) => {
  return (
    <div className="two-columns">
      <div className={classnames('two-columns__column two-columns__left', data.left.class && data.left.class)}>
        <BackgroundLeftDiv
          className="two-columns__column__background"
          backgroundImage={data.left.backgroundImage}
          backgroundColor={data.left.backgroundColor}
        />
        <ReactMarkdown source={data.left.content} escapeHtml={false} />
      </div>
      <div className={classnames('two-columns__column two-columns__right', data.right.class && data.right.class)}>
        <BackgroundRightDiv
          className="two-columns__column__background"
          backgroundImage={data.right.backgroundImage}
          backgroundColor={data.right.backgroundColor}
        />
        <ReactMarkdown source={data.right.content} escapeHtml={false} />
      </div>
    </div>
  );
};

export default TwoColumns;
