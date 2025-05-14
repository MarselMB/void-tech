import { FC, PropsWithChildren } from 'react';

import * as styles from './IconButton.module.scss';

interface IconButtonProps {
  onClick: () => void;
}

const IconButton: FC<PropsWithChildren<IconButtonProps>> = ({ onClick, children }) => {
  return (
    <button type="button" className={styles.iconButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
