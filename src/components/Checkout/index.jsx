import { useContext } from 'react';
import { Container } from './styles';

import { CartContext } from '../../context/CartContext';

export default function Checkout() {

  const { cartItems } = useContext(CartContext);

  console.log(cartItems);

  return (
    <Container>
      <h2>Checkout</h2>
    </Container>
  );
}
