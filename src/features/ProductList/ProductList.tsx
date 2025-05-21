import { FC, useCallback, useEffect, useRef, useState } from 'react';
import cn from 'clsx';

import ProductCard from 'src/widgets/ProductCard';

import { PRODUCTS } from 'src/shared/constants/mocks/products';

import * as styles from './ProductList.module.scss';

const ProductList: FC = () => {
  const hiddenRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastCardRef = useRef<HTMLDivElement | null>(null);

  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [batchSize, setBatchSize] = useState<number>(0);

  const loadMore = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + batchSize, PRODUCTS.length));
  }, [batchSize]);

  useEffect(() => {
    const calculateVisible = () => {
      const container = hiddenRef.current;
      if (!container) return;

      const cards = container.querySelectorAll('[data-card]');
      const rowHeights = new Set<number>();

      cards.forEach(card => {
        rowHeights.add((card as HTMLElement).offsetTop);
      });

      const rows = Array.from(rowHeights)
        .sort((a, b) => a - b)
        .slice(0, 1);
      const count = Array.from(cards).filter(card => rows.includes((card as HTMLElement).offsetTop)).length;

      setBatchSize(count);
      setVisibleCount(2 * count);
    };

    calculateVisible();
    window.addEventListener('resize', calculateVisible);
    return () => window.removeEventListener('resize', calculateVisible);
  }, []);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0,
      },
    );

    const lastCardEl = lastCardRef.current;

    if (lastCardEl) {
      observerRef.current.observe(lastCardEl);
    }

    return () => {
      if (observerRef.current && lastCardEl) {
        observerRef.current.unobserve(lastCardEl);
      }
    };
  }, [loadMore, visibleCount]);

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
          {PRODUCTS.slice(0, visibleCount).map((product, index, array) => {
            const isLast = index === array.length - 1;

            return (
              <div key={product.name} ref={isLast ? lastCardRef : null} data-card>
                <ProductCard
                  price={product.price}
                  img={product.img}
                  name={product.name}
                  description={product.description}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ProductList;
