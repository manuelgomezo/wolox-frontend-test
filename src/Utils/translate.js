const TRANSLEABLE_KEYS = ['content', 'title'];

const doTranslate = (t, data) => {
  const dataTranslated = { ...data };

  TRANSLEABLE_KEYS.forEach((keys) => {
    if (dataTranslated[keys]) dataTranslated[keys] = t(dataTranslated[keys]);
  });

  return dataTranslated;
};

const getTranslatedFile = (lang, file) => {
  const content = require(`Locales/${lang}/${file}`).default;
  return content;
};

export { doTranslate, getTranslatedFile };
