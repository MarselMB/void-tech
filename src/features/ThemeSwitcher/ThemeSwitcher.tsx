import { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { ThemeContext } from 'src/app/providers/ThemeProvider/ThemeContext';

import AvatarButton from 'src/shared/ui/AvatarButton';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <AvatarButton onClick={toggleTheme}>{theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}</AvatarButton>;
};

export default ThemeSwitcher;
