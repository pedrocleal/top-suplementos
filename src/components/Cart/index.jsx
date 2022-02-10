import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { CartItem, Container } from './styles';
import { GrClose } from 'react-icons/gr'

import { Button } from '../Button';

import { CartContext } from '../../context/CartContext';

export default function Cart({ isOpen, setCart }) {
  const [total, setTotal] = useState('00,00');

  const { cartItems } = useContext(CartContext);

  const itemsPrice = cartItems.map((item) => Number(item.price.replace(',', '.')));

  useEffect(() => {
    const totalAmount = itemsPrice.reduce((prev, index) => prev + index, 0);
    setTotal(totalAmount.toFixed(2).replace('.', ','));
  }, [cartItems]);

  return (
    <Container isOpen={isOpen}>
      <div className='header'>
        <h2>Meu carrinho</h2>
        <button onClick={() => setCart(false)}><GrClose /></button>
      </div>

      {cartItems.length !== 0
        ? cartItems.map((item) => (
          <CartItem key={Math.random()}>
            <img src={item.src} alt="Item foto" />
            <div className="info">
              <strong>{item.name}</strong>
              <span>{item.price}</span>
            </div>
          </CartItem>
        ))
        : <span>Seu carrinho está vazio!</span>}

      <div className="footer">
        <h2>TOTAL</h2>
        <h1>
          R$
          {total}
        </h1>
        <div className="actions">
          <Button>Finalizar compra</Button>
          <Button onClick={() => setCart((prevState) => !prevState)}>Continuar comprando</Button>
        </div>
      </div>
    </Container>
  );
}

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setCart: PropTypes.func.isRequired,
};
