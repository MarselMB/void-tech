import { FC, PropsWithChildren } from 'react';

import Header from 'src/widgets/Header';

import * as styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header className={styles.header} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
