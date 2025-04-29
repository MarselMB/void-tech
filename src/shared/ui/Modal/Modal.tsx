import React, { FC, ReactNode } from 'react';

import close from './close.svg';

import IconButton from '../IconButton';

import * as styles from './Modal.module.scss';

interface ModalProps {
  visible: boolean;
  children: ReactNode;
  setVisible: (visible: boolean) => void;
}

const Modal: FC<ModalProps> = ({ visible, children, setVisible }) => {
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
          <IconButton img={close} handleOnClick={handleOnClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
