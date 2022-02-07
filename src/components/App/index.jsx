import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';

import Header from '../Header';
import ItemsNavigation from '../ItemsNavigation';
import Carousel from '../Carousel'
import ListItems from '../ListItems';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ItemsNavigation />
        <Carousel />
        <ListItems />
      </Container>
    </ThemeProvider>
  );
}
