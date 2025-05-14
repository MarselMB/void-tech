import React, { FC, PropsWithChildren } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import IconButton from '../IconButton';

import * as styles from './Modal.module.scss';

interface ModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ visible, children, setVisible }) => {
  const handleOnClose = () => {
    setVisible(false);
  };

  const handleOnClickModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      handleOnClose();
    }
  };

  if (!visible) return null;

  return (
    <div className={styles.modal} onClick={handleOnClickModal} role="presentation">
      <div className={styles.modalContent}>
        {children}

        <div className={styles.closeButton}>
          <IconButton onClick={handleOnClose}>
            <CloseRoundedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
