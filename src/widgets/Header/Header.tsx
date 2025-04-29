import { FC } from 'react';
import cn from 'clsx';

import Logo from 'src/shared/ui/Logo';

import * as styles from './Header.module.scss';

export interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(styles.header, className)}>
      <Logo />
      <div>Navigation...</div>
    </header>
  );
};

export default Header;
