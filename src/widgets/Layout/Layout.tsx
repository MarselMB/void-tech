import { FC, ReactNode } from 'react';

import Header from 'src/widgets/Header';

import * as styles from './Layout.module.scss';

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header className={styles.header} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
