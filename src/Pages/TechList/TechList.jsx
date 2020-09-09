import React, { useState, useEffect, useReducer } from 'react';
import { Trans, withTranslation } from 'react-i18next';
import axios from 'axios';
import Wolox from 'Services/Wolox';
import { CardList, FilterContent, Loading } from 'Components';
import { searchFilter, sortData } from 'Utils/arrays';

import './TechList.scss';

const getTechCard = (item) => (
  <div className="tech-item">
    <div className="tech-item__prop">
      <strong>
        <Trans i18nKey="card.author" />
      </strong>
      {item.author}
    </div>
    <div className="tech-item__prop">
      <strong>
        <Trans i18nKey="card.language" />
      </strong>
      {item.language}
    </div>
    <div className="tech-item__prop">
      <strong>
        <Trans i18nKey="card.license" />
      </strong>
      {item.license}
    </div>
    <div className="tech-item__prop">
      <strong>
        <Trans i18nKey="card.type" />
      </strong>
      {item.type}
    </div>
    <div className="tech-item__prop">
      <strong>
        <Trans i18nKey="card.year" />
      </strong>
      {item.year}
    </div>
  </div>
);

const formatContent = (data) => {
  const formatedData = data.map((item) => {
    return {
      ...item,
      title: item.tech,
      content: getTechCard(item),
    };
  }, {});
  return formatedData;
};

const filterReducer = (state, action) => {
  let newData = [];
  switch (action.type) {
    case 'FILTER_TEXT':
      newData = searchFilter([...action.data], action.keyword, action.fields);
      break;
    case 'SET_DATA':
      newData = [...action.data];
      break;
    case 'SORT':
      newData = sortData([...state], action.order, action.field);
      break;
    default:
      throw new Error();
  }
  return formatContent(newData);
};

// Cancel token for LOGIN Request
const controller = axios.CancelToken.source();
const SEARCH_FIELDS = ['tech', 'type'];

const TechList = ({ i18n }) => {
  // State
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [filtered, filteredDispatch] = useReducer(filterReducer, []);

  useEffect(() => {
    setLoading(true);
    // Wolox Service get tech list and add to data state
    Wolox.getList('techs', controller.signal).then(([listData, error]) => {
      if (error) throw new Error(error);
      setLoading(false);
      setData(listData);
    });

    return () => {
      controller.cancel();
    };
  }, []);

  useEffect(() => {
    filteredDispatch({ type: 'SET_DATA', data });
  }, [data]);

  useEffect(() => {
    filteredDispatch({ type: 'SET_DATA', data: formatContent(filtered) });
    // eslint-disable-next-line
  }, [i18n.language]);

  return (
    <div className="tech-list max-width">
      <div className="tech-list__filters">
        <FilterContent data={data} filtered={filtered} filterDispatch={filteredDispatch} fields={SEARCH_FIELDS} />
      </div>
      <div className="tech-list__container">{!loading && filtered ? <CardList data={filtered} /> : <Loading />}</div>
    </div>
  );
};

export default withTranslation()(TechList);
