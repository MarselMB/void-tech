import { FC } from 'react';
import cn from 'clsx';

import Logo from 'src/shared/ui/Logo';
import ThemeToggle from 'src/features/ThemeSwitcher';
import LanguageSwitcher from 'src/features/LanguageSwitcher';

import * as styles from './Header.module.scss';

export interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(styles.header, className)}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <nav className={styles.nav}>Navigation...</nav>

      <div className={styles.toolbar}>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
