import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './FilterContent.scss';

const FilterContent = ({ data, filtered, setFiltered, fields }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

  const searchFilter = (array, text, keys) => {
    const newData = [...array];
    return newData.filter((item) => {
      let includes = false;
      keys.forEach((key) => {
        if (item[key].toLowerCase().includes(text.toLowerCase())) {
          includes = true;
        }
      });
      return includes;
    });
  };

  const sortData = (array, type, key) => {
    const newData = [...array];
    if (type === 'asc') {
      return newData.sort((a, b) => {
        if (a[key].toLowerCase() < b[key].toLowerCase()) {
          return -1;
        }
        if (a[key].toLowerCase() > b[key].toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
    if (type === 'desc') {
      return newData.sort((a, b) => {
        if (a[key].toLowerCase() < b[key].toLowerCase()) {
          return 1;
        }
        if (a[key].toLowerCase() > b[key].toLowerCase()) {
          return -1;
        }
        return 0;
      });
    }
    return newData;
  };

  useEffect(() => {
    if (search) {
      setFiltered(searchFilter(data, search, fields));
    } else {
      setFiltered(data);
    }
  }, [search]);

  return (
    <div className="filter-content">
      <div className="filter-content__item">
        <input value={search} placeholder={t('filter.search')} className="input" onChange={(e) => setSearch(e.currentTarget.value)} />
      </div>
      <div className="filter-content__item">
        <select className="input" onChange={(e) => setFiltered(sortData(filtered, e.currentTarget.value, 'tech'))}>
          <option disabled selected>
            Ordenar por:
          </option>
          <option value="asc">Ordenar ascendentemente</option>
          <option value="desc">Ordenar descendentemente</option>
        </select>
      </div>
    </div>
  );
};

export default FilterContent;
