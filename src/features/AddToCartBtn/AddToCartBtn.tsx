import { FC } from 'react';

import IconButton from 'src/shared/ui/IconButton';
import Button from 'src/shared/ui/Button';

import plus from './plus.svg';
import minus from './minus.svg';

import * as styles from './AddToCartBtn.module.scss';

interface AddToCartBtnProps {
  counter: number;
  setCounter: (counter: number) => void;
}

const AddToCartBtn: FC<AddToCartBtnProps> = ({ counter, setCounter }) => {
  const handleOnclickPlus = () => {
    setCounter(counter + 1);
  };

  const handleOnclickMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={styles.addToCartBtn}>
      {!counter && <Button title="В корзину" onClick={handleOnclickPlus} />}

      {!!counter && (
        <div className={styles.counterBtn}>
          <IconButton img={plus} onClick={handleOnclickPlus} />

          <h5 className={styles.counterText}>{counter}</h5>

          <IconButton img={minus} onClick={handleOnclickMinus} />
        </div>
      )}
    </div>
  );
};

export default AddToCartBtn;
