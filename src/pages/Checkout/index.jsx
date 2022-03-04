import { Link } from 'react-router-dom';
import { Container } from './styles';

import Checkout from '../../components/Checkout';

import arrow from '../../assets/images/icons/arrow-left.svg';

export default function CheckoutPage() {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Voltar" />
        <span>Voltar</span>
      </Link>
      <Checkout />
    </Container>
  );
}
