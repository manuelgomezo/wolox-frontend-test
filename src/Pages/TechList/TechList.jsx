import React, { useState, useEffect, useReducer } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import axios from 'axios';
import Wolox from 'Services/Wolox';
import { CardList, FilterContent } from 'Components';
import { searchFilter, sortData } from 'Utils/arrays';

import './TechList.scss';

const filterReducer = (state, action) => {
  let newData = [];
  switch (action.type) {
    case 'FILTER_TEXT':
      newData = searchFilter([...action.data], action.keyword, action.fields);
      return newData;
    case 'SET_DATA':
      return [...action.data];
    case 'SORT':
      newData = sortData([...state], action.order, action.field);
      return newData;
    default:
      throw new Error();
  }
};

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
      content: getTechCard(item),
    };
  }, {});
  return formatedData;
};

// Cancel token for LOGIN Request
const controller = axios.CancelToken.source();
const SEARCH_FIELDS = ['tech', 'type'];

const TechList = () => {
  // Translate service hook
  const { t } = useTranslation();

  // State
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [filtered, filteredDispatch] = useReducer(filterReducer, []);

  useEffect(() => {
    setLoading(true);
    // Wolox Service get tech list and add to data state
    Wolox.getList('techs', controller.signal).then(([listData, error]) => {
      if (error) throw Error(error);
      setLoading(false);
      setData(listData);
    });

    return () => {
      controller.cancel();
    };
  }, []);

  useEffect(() => {
    filteredDispatch({ type: 'SET_DATA', data: formatContent(data) });
  }, [t, data]);

  return (
    <div className="tech-list max-width">
      <div className="tech-list__filters">
        <FilterContent data={data} filtered={filtered} filterDispatch={filteredDispatch} fields={SEARCH_FIELDS} />
      </div>
      <div className="tech-list__container">{!loading && filtered ? <CardList data={filtered} /> : <div className="loading" />}</div>
    </div>
  );
};

export default TechList;
