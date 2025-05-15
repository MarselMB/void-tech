import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';

import * as styles from './AvatarButton.module.scss';

interface AvatarButtonProps {
  onClick: () => void;
  className?: string;
}

const AvatarButton: FC<PropsWithChildren<AvatarButtonProps>> = ({ onClick, children, className }) => {
  return (
    <button type="button" className={cn(styles.btn, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default AvatarButton;
