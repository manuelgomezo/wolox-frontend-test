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
        return 1;
      }
      if (a[key].toLowerCase() > b[key].toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }
  if (type === 'desc') {
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
  return newData;
};

export { searchFilter, sortData };
