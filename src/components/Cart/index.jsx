import PropTypes from 'prop-types';
import {
  useContext, useEffect, useMemo, useState,
} from 'react';
import { GrClose } from 'react-icons/gr';

import { Container } from './styles';

import CartItem from '../CartItem';
import { Button } from '../Button';

import { CartContext } from '../../context/CartContext';

export default function Cart({ isOpen, setCart }) {
  const [total, setTotal] = useState('00,00');
  const memoTotal = useMemo(() => total, [total]);

  const {
    cartItems, handleDeleteCartItem, handleItemsCounterPlus, handleItemsCounterMinus,
  } = useContext(CartContext);

  const cartItemsMemo = useMemo(() => cartItems, [cartItems]);

  const itemsPrice = cartItemsMemo.map((item) => Number(item.price.replace(',', '.') * item.counter));

  useEffect(() => {
    const totalAmount = itemsPrice.reduce((prev, index) => prev + index, 0);
    setTotal(totalAmount.toFixed(2).replace('.', ','));
  }, [cartItems]);

  return (
    <Container isOpen={isOpen}>
      <div className="header">
        <h2>Meu carrinho</h2>
        <button type="button" onClick={() => setCart(false)}><GrClose /></button>
      </div>

      {cartItemsMemo.length !== 0
        ? cartItemsMemo.map((item) => (
          <CartItem
            id={item.id}
            key={Math.random()}
            src={item.src}
            name={item.name}
            price={item.price}
            counter={item.counter}
            onItemsCounterPlus={handleItemsCounterPlus}
            onItemsCounterMinus={handleItemsCounterMinus}
            onDeleteItem={handleDeleteCartItem}
          />
        ))
        : <span>Seu carrinho está vazio!</span>}

      <div className="footer">
        <h2>TOTAL</h2>
        <h1>
          R$
          {memoTotal}
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
