import { FC, useState } from 'react';
import AddToCartBtn from '../../features/AddToCartBtn';
import * as styles from './ProductCard.module.scss';

interface ProductCardProps {
  price: number;
  img: string;
  name: string;
  description: string;
}

const ProductCard: FC<ProductCardProps> = ({ price, img, name, description }) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className={styles.cardProduct} data-card>
      <img src={img} alt="product" />

      <div className={styles.textContent}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.purchaseContent}>
          <h3>{`$${price}`}</h3>
          <AddToCartBtn counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
