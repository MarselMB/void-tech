import { FC, useState } from 'react';

import AddToCartBtn from 'src/features/AddToCartBtn';

import * as styles from './ProductDetails.module.scss';

interface ProductDetailsProps {
  price: number;
  img: string;
  name: string;
  category: string;
  description: string;
}

const ProductDetails: FC<ProductDetailsProps> = ({ price, img, name, category, description }) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className={styles.productDetails}>
      <img src={img} alt="imgProduct" className={styles.img} />

      <div className={styles.textContent}>
        <h3 className={styles.name}>{name}</h3>
        <h5 className={styles.category}>{category}</h5>
        <p className={styles.description}>{description}</p>
        <h3 className={styles.price}>{`$${price}`}</h3>
        <AddToCartBtn counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
};

export default ProductDetails;
