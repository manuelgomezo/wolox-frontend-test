import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wolox from 'Services/Wolox';
import './TechList.scss';

const renderCard = (index, item) => {
  return <div key={`techcard_${index}`}>{item.tech}</div>;
};

const TechList = () => {
  // Cancel token for LIST Request
  const controller = axios.CancelToken.source();

  // State
  const [loading, setLoading] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    Wolox.getList(
      'techs',
      (response) => {
        setLoading(false);
        if (response.status === 200 && response.data) setData(response.data);
      },
      controller.signal,
    );

    return () => {
      controller.cancel();
    };
  }, []);

  return (
    <div className="tech-list">
      <div className="tech-list__container">
        {!loading && data ? data.map((item, index) => renderCard(index, item)) : <div className="loading" />}
      </div>
    </div>
  );
};

export default TechList;
