import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './FilterContent.scss';

const FilterContent = ({ data, filterDispatch, fields }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      filterDispatch({ type: 'FILTER_TEXT', data, keyword: search, fields });
    } else {
      filterDispatch({ type: 'SET_DATA', data });
    }
  }, [search, data, fields, filterDispatch]);

  return (
    <div className="filter-content">
      <div className="filter-content__item">
        <input placeholder={t('filter.search')} className="input" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
      </div>
      <div className="filter-content__item">
        <select
          className="input"
          defaultValue="default"
          onChange={(e) => filterDispatch({ type: 'SORT', order: e.currentTarget.value, field: 'tech' })}
        >
          <option value="default" disabled>
            {t('filter.sort')}
          </option>
          <option value="desc">{t('filter.abc')}</option>
          <option value="asc">{t('filter.cba')}</option>
        </select>
      </div>
    </div>
  );
};

export default FilterContent;
