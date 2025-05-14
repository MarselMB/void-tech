import { FC, useContext } from 'react';
import { Link } from 'react-router';

import { ThemeContext } from 'src/app/providers/ThemeProvider/ThemeContext';

import darkLogo from './darkLogo.svg';
import lightLogo from './lightLogo.svg';

import * as styles from './Logo.module.scss';

const Logo: FC = () => {
  const { theme } = useContext(ThemeContext);

  const logo = theme === 'dark' ? darkLogo : lightLogo;

  return (
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
