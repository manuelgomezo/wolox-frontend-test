import React from 'react';
import './Loading.scss';

const Loading = ({ color }) => {
  return (
    <div className="loading">
      <div style={{ borderColor: color }} />
      <div />
    </div>
  );
};

export default Loading;
