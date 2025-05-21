import { FC, useEffect, useRef, useState } from 'react';
import cn from 'clsx';

import ProductCard from 'src/widgets/ProductCard';

import { PRODUCTS } from 'src/shared/constants/mocks/products';

import * as styles from './ProductList.module.scss';

const ProductList: FC = () => {
  const hiddenRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState<number | null>(null);

  useEffect(() => {
    const calculateVisible = () => {
      const container = hiddenRef.current;
      if (!container) return;

      const cards = container.querySelectorAll('[data-card]');
      const rowHeights = new Set<number>();

      cards.forEach(card => {
        rowHeights.add((card as HTMLElement).offsetTop);
      });

      const maxRows = 2;
      const rows = Array.from(rowHeights)
        .sort((a, b) => a - b)
        .slice(0, maxRows);
      const count = Array.from(cards).filter(card => rows.includes((card as HTMLElement).offsetTop)).length;

      setVisibleCount(count);
    };

    calculateVisible();
    window.addEventListener('resize', calculateVisible);
    return () => window.removeEventListener('resize', calculateVisible);
  }, []);

  return (
    <>
      <div className={cn(styles.list, styles.hiddenList)} ref={hiddenRef} aria-hidden>
        {PRODUCTS.map(product => (
          <ProductCard
            key={product.name}
            price={product.price}
            img={product.img}
            name={product.name}
            description={product.description}
            data-card
          />
        ))}
      </div>

      {visibleCount !== null && (
        <div className={styles.list}>
          {PRODUCTS.slice(0, visibleCount).map(product => (
            <ProductCard
              key={product.name}
              price={product.price}
              img={product.img}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
