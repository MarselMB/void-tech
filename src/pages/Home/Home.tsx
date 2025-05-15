import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Modal from 'src/shared/ui/Modal';
import Button from 'src/shared/ui/Button';
import AddToCartBtn from 'src/features/AddToCartBtn';
import ProductCard from 'src/widgets/ProductCard';
import ProductDetails from 'src/widgets/ProductDetails';
import CartItem from 'src/widgets/CartItem';

import { PRODUCT_1 } from 'src/shared/constants/mocks/productItem';

import * as styles from './Home.module.scss';

const Home: FC = () => {
  const { t } = useTranslation();

  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  const { price, img, name, description, category } = PRODUCT_1;

  const handleOnClickOpenModal = () => {
    setVisibleModal(true);
  };

  return (
    <>
      <div className={styles.home}>
        <div>
          <Button title={t('modal')} onClick={handleOnClickOpenModal} />
        </div>

        <AddToCartBtn counter={counter} setCounter={setCounter} />

        <ProductCard price={price} img={img} name={name} description={description} />

        <ProductDetails price={price} img={img} name={name} description={description} category={category} />

        <CartItem price={price} img={img} name={name} counter={counter} setCounter={setCounter} />
      </div>

      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique atque ea quod? Tempore debitis consectetur
        repellendus minus quae deserunt voluptatibus velit provident nihil, eaque, eos officia a, autem at temporibus!
      </Modal>
    </>
  );
};

export default Home;
