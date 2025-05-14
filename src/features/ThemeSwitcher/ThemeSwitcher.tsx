import { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { ThemeContext } from 'src/app/providers/ThemeProvider/ThemeContext';

import * as styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button type="button" className={styles.btn} onClick={toggleTheme}>
      {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
};

export default ThemeSwitcher;
