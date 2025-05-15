import { FC } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useTranslation } from 'react-i18next';

import AddToCartBtn from 'src/features/AddToCartBtn';
import IconButton from 'src/shared/ui/IconButton';

import * as styles from './CartItem.module.scss';

interface CartItemProps {
  price: number;
  img: string;
  name: string;
  counter: number;
  setCounter: (counter: number) => void;
}

const CartItem: FC<CartItemProps> = ({ price, img, name, counter, setCounter }) => {
  const { t } = useTranslation();

  const handleOnClose = () => {
    setCounter(0);
  };

  return (
    <div className={styles.cartItem}>
      <img src={img} alt="imgProduct" className={styles.img} />

      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>

        <h5 className={styles.price}>
          {counter ? (
            <>
              {`$${price} x ${counter} = `}
              <span className={styles.total}>{`$${price * counter}`}</span>
            </>
          ) : (
            t('notAddedCart')
          )}
        </h5>

        <AddToCartBtn counter={counter} setCounter={setCounter} />
      </div>

      <div className={styles.closeButton}>
        <IconButton onClick={handleOnClose}>
          <CloseRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
