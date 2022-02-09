import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';

import Header from '../Header';
import ItemsNavigation from '../ItemsNavigation';
import Routes from '../../Routes';

export const CartContext = createContext();

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <ItemsNavigation />
          <Routes />
        </Container>
      </ThemeProvider>
    </CartContext.Provider>
  );
}
