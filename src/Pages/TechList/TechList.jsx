import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Wolox from 'Services/Wolox';
import { Card } from 'Components';

import './TechList.scss';

const RenderCard = ({ className, data }) => {
  const { t } = useTranslation();
  return (
    <Card className={className} image={data.logo} title={data.tech}>
      <div className="tech-item">
        <div className="tech-item__prop">
          <strong>{t('card.author')}</strong>
          {`: `}
          {data.author}
        </div>
        <div className="tech-item__prop">
          <strong>{t('card.language')}</strong>
          {`: `}
          {data.language}
        </div>
        <div className="tech-item__prop">
          <strong>{t('card.license')}</strong>
          {`: `}
          {data.license}
        </div>
        <div className="tech-item__prop">
          <strong>{t('card.type')}</strong>
          {`: `}
          {data.type}
        </div>
        <div className="tech-item__prop">
          <strong>{t('card.year')}</strong>
          {`: `}
          {data.year}
        </div>
      </div>
    </Card>
  );
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
      <div className="tech-list__container max-width">
        {!loading && data ? (
          <div className="tech-list__list">
            {data.map((item, index) => (
              <RenderCard className="card--horizontal tech-list__item" key={`techcard_${index}`} data={item} />
            ))}
          </div>
        ) : (
          <div className="loading" />
        )}
      </div>
    </div>
  );
};

export default TechList;
