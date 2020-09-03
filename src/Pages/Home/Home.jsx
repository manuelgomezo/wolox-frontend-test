import React from 'react';
import { Hero } from 'Components';
import { useTranslation } from 'react-i18next';
import HomeData from './HomeData.json';
import './Home.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home max-width">
      {HomeData.map((item) => {
        switch (item.type) {
          case 'hero':
            return (
              <section id={item.id}>
                <Hero images={item.data.images} type={item.data.type} className={item.data.classnames} alt={t(item.data.title)}>
                  {t(item.data.content)}
                </Hero>
              </section>
            );
          default:
            return <></>;
        }
      })}
    </div>
  );
};

export default Home;
