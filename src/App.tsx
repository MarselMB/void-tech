import { FC } from 'react';
import { BrowserRouter } from 'react-router';

import Home from './pages/Home';
import Layout from './widgets/Layout';

import 'src/shared/styles/index.css';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Home />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
