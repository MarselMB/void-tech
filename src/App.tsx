import { FC } from 'react';
import { BrowserRouter } from 'react-router';

import ThemeProvider from './app/providers/ThemeProvider/ThemeProvider';
import Home from './pages/Home';
import Layout from './widgets/Layout';

import 'src/app/styles/index.scss';

const App: FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Home />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
