import React, { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import IconButton from '../IconButton';

import * as styles from './Modal.module.scss';

interface ModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  container?: HTMLElement;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ visible, setVisible, children, container = document.body }) => {
  const handleOnClose = () => {
    setVisible(false);
  };

  const handleOnClickModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      handleOnClose();
    }
  };

  if (!visible) return null;

  return createPortal(
    <div className={styles.modal} onClick={handleOnClickModal} role="presentation">
      <div className={styles.modalContent}>
        {children}

        <div className={styles.closeButton}>
          <IconButton onClick={handleOnClose}>
            <CloseRoundedIcon />
          </IconButton>
        </div>
      </div>
    </div>,
    container,
  );
};

export default Modal;
