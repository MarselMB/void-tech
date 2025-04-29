import { FC, useState } from 'react';

import Modal from 'src/shared/ui/Modal';
import Button from 'src/shared/ui/Button';
import AddToCartBtn from 'src/features/AddToCartBtn';

import * as styles from './Home.module.scss';

const Home: FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  const handleOnClickOpenModal = () => {
    setVisibleModal(true);
  };

  return (
    <>
      <div className={styles.home}>
        <div>
          <Button title="Модальное окно" onClick={handleOnClickOpenModal} />
        </div>

        <AddToCartBtn counter={counter} setCounter={setCounter} />
      </div>

      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique atque ea quod? Tempore debitis consectetur
        repellendus minus quae deserunt voluptatibus velit provident nihil, eaque, eos officia a, autem at temporibus!
      </Modal>
    </>
  );
};

export default Home;
