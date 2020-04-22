import Service from '@ember/service';
import { LANG } from '../lang/lang';

const getBrowserLang = () => {
  let lang = window.navigator.languages ? window.navigator.languages[ 0 ] : null;
  lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

  let shortLang = lang;
  if (shortLang.indexOf('-') !== -1)
    shortLang = shortLang.split('-')[ 0 ];

  if (shortLang.indexOf('_') !== -1)
    shortLang = shortLang.split('_')[ 0 ];

  return shortLang;
}

export const setLang = (lang) => {
  window.localStorage.setItem('lang', lang);
}

export const getLang = () => {
  const browserLang = getBrowserLang();
  const lang = window.localStorage.getItem('lang');
  return lang ? lang : browserLang || 'en';
}

export const getLangKey = (param) => {
  return param.toLowerCase().replace(/ /g, "-");
}

export const getLangPhrase = (phrase) => {
  const lang = getLang();
  const key = getLangKey(phrase);
  let phraseT = phrase;
  if (LANG.has(lang)) {
    const translations = LANG.get(lang);
    if (translations.has(key)) {
      phraseT = translations.get(key);
    }
  }
  return phraseT;
}

export default class LangService extends Service {
  get(phrase) {
    return getLangPhrase(phrase);
  }
}
