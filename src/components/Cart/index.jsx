import PropTypes from 'prop-types';
import {
  useContext, useMemo,
} from 'react';
import { GrClose } from 'react-icons/gr';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import CartItem from '../CartItem';
import { Button } from '../Button';

import { CartContext } from '../../context/CartContext';

export default function Cart({ isOpen, setCart }) {

  const {
    cartItems, handleDeleteCartItem, handleItemsCounterPlus, handleItemsCounterMinus, total,
  } = useContext(CartContext);

  const cartItemsMemo = useMemo(() => cartItems, [cartItems]);

  let navigate = useNavigate();

  function handleFinishPurchase() {
    setCart(false);
    navigate('/checkout');
  }

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
          {total}
        </h1>
        <div className="actions">
          <button type="button" onClick={handleFinishPurchase}>Finalizar compra</button>
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
