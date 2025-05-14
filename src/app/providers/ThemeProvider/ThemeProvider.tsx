import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { TTheme, ThemeContext } from './ThemeContext';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const getTheme = () => (localStorage.getItem('theme') as TTheme) || 'light';
  const [theme, setTheme] = useState<TTheme>(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
