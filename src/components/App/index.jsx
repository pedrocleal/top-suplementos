import { ThemeProvider } from 'styled-components';

import CartProvider from '../../context/CartContext';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';

import Header from '../Header';
// import ItemsNavigation from '../ItemsNavigation';
import Routes from '../../Routes';

export default function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </CartProvider>
  );
}
