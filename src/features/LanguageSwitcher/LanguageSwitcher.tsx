import { useTranslation } from 'react-i18next';

import * as styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <button type="button" className={styles.btn} onClick={toggleLanguage}>
      {i18n.language === 'ru' ? 'RU' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
