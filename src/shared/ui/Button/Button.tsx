import { FC } from 'react';

import * as styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  title: string;
}

const Button: FC<ButtonProps> = ({ onClick, title }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    {title}
  </button>
);

export default Button;
