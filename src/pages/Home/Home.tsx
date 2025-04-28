import { FC, useState } from 'react';

import Modal from 'src/shared/Modal';

const Home: FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const handleOnClickOpenModal = () => {
    setVisibleModal(true);
  };

  return (
    <div>
      <button type="button" onClick={handleOnClickOpenModal}>
        Open modal
      </button>

      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique atque ea quod? Tempore debitis consectetur
        repellendus minus quae deserunt voluptatibus velit provident nihil, eaque, eos officia a, autem at temporibus!
      </Modal>
    </div>
  );
};

export default Home;
