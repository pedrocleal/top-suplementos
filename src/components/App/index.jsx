import { ThemeProvider } from 'styled-components';

import CartProvider from '../../context/CartContext';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';

import Header from '../Header';
import Routes from '../../Routes';
import Footer from '../Footer';
import Copy from '../Copy';

export default function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Copy />
          <Routes />
          <Footer />
        </Container>
      </ThemeProvider>
    </CartProvider>
  );
}
