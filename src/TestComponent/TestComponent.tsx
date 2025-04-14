import { FC } from 'react';

import NoRowsSvg from 'src/assets/noRows.svg?react';

import * as styles from './TestComponent.module.scss';

const TestComponent: FC = () => {
  return (
    <div className={styles.testComponent}>
      <h1 className={styles.title}>Hello, VoidTech!</h1>
      <p>Welcome to your App.</p>
      <NoRowsSvg />
    </div>
  );
};

export default TestComponent;
