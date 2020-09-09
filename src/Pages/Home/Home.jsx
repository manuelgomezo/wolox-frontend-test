import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Hero, TwoColumns } from 'Components';
import { useTranslation } from 'react-i18next';
import { getTranslatedFile } from 'Utils/translate';
import './Home.scss';

const renderHero = (key, id, data) => (
  <section id={id} key={key}>
    <Hero images={data.images} type={data.type} className={data.classnames} title={data.title}>
      {data.content}
    </Hero>
  </section>
);

const renderTwoColumns = (key, id, data) => (
  <section id={id} key={key}>
    <TwoColumns data={data} />
  </section>
);

const renderFullWidth = (key, id, data) => (
  <section id={id} key={key}>
    <ReactMarkdown source={data.content} escapeHtml={false} />
  </section>
);

const renderSeparator = (key) => <div key={key} className="separator" />;

const Home = () => {
  const { i18n } = useTranslation();
  const [homeData, setHomeData] = useState();

  useEffect(() => {
    const data = getTranslatedFile(i18n.language, 'home');
    setHomeData(data);
  }, [i18n.language]);

  return (
    <div className="home max-width">
      {homeData &&
        homeData.map((item, index) => {
          const sectionID = `${item.id}_${index}`;
          if (item.type === 'hero') return renderHero(sectionID, item.id, item.data);
          if (item.type === 'two-columns') return renderTwoColumns(sectionID, item.id, item.data);
          if (item.type === 'fullwidth') return renderFullWidth(sectionID, item.id, item.data);
          if (item.type === 'separator') return renderSeparator(sectionID);
          return <></>;
        })}
    </div>
  );
};

export default Home;
