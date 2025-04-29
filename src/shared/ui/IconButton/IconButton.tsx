import { FC } from 'react';

import * as styles from './IconButton.module.scss';

interface IconButtonProps {
  onClick: () => void;
  img: string;
}

const IconButton: FC<IconButtonProps> = ({ onClick, img }) => {
  return (
    <button type="button" className={styles.iconButton} onClick={onClick}>
      <img src={img} alt="close" className={styles.img} />
    </button>
  );
};

export default IconButton;
