import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'Components';
import './CardList.scss';

const RenderCard = ({ className, data }) => {
  return (
    <Card className={className} image={data.logo} title={data.tech}>
      {data.content}
    </Card>
  );
};

const CardList = ({ data }) => {
  // Translate service hook
  const { t } = useTranslation();

  return (
    <div className="card-list">
      <div className="card-list__list">
        {data.map((item, index) => (
          <RenderCard className="card--horizontal card-list__item" key={`techcard_${index}`} data={item} />
        ))}
      </div>
      <div className="card-list__total">
        <strong>{t('list.total')}</strong>
        {data.length}
      </div>
    </div>
  );
};

export default CardList;
