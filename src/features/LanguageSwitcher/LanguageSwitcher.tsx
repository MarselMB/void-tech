import { useTranslation } from 'react-i18next';
import AvatarButton from 'src/shared/ui/AvatarButton';

import * as styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <AvatarButton onClick={toggleLanguage} className={styles.languageSwitcher}>
      {i18n.language === 'ru' ? 'RU' : 'EN'}
    </AvatarButton>
  );
};

export default LanguageSwitcher;
