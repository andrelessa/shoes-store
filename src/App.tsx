import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Analytics } from '@vercel/analytics/react';

import Routes from './routers';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { CartProvider } from './hooks/useCart';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Analytics />
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
