import { FC } from 'react';
import { Link } from 'react-router';

import logo from './logoBazaar.svg';

import * as styles from './Logo.module.scss';

const Logo: FC = () => (
  <Link to="/" className={styles.logo}>
    <img src={logo} alt="logo" />
  </Link>
);

export default Logo;
