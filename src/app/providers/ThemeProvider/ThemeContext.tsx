import { createContext } from 'react';

export type TTheme = 'light' | 'dark';

export interface ThemeContextProps {
  theme: TTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});
