/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const TRANSLEABLE_KEYS = ['content', 'title'];

const doTranslate = (t, data) => {
  const dataTranslated = { ...data };

  TRANSLEABLE_KEYS.forEach((keys) => {
    if (dataTranslated[keys]) dataTranslated[keys] = t(dataTranslated[keys]);
  });

  return dataTranslated;
};

const getTranslatedFile = (lang, file) => {
  if (lang === 'en') return require(`Locales/en/${file}`).default;
  return require(`Locales/es/${file}`).default;
};

export { doTranslate, getTranslatedFile };
