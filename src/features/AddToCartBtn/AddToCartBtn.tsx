import { FC } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

import IconButton from 'src/shared/ui/IconButton';
import Button from 'src/shared/ui/Button';

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
          <IconButton onClick={handleOnclickPlus}>
            <AddRoundedIcon />
          </IconButton>

          <h5 className={styles.counterText}>{counter}</h5>

          <IconButton onClick={handleOnclickMinus}>
            <RemoveRoundedIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default AddToCartBtn;
