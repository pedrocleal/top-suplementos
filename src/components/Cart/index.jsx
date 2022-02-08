import { CartItem, Container } from "./styles"

import { Button } from '../Button';

import { CartContext } from "../App";
import { useContext, useEffect, useState } from "react";

export default function Cart({ isOpen, setCart }) {

  const [ total, setTotal ] = useState('00,00');

  const { cartItems } = useContext(CartContext);

  const itemsPrice = cartItems.map(item => Number(item.price.replace(',','.')));

  useEffect(() => {
    const total = itemsPrice.reduce((prev, index) => prev + index, 0);
    setTotal(total.toFixed(2).replace('.',','))
  }, [cartItems])

  return ( 
    <Container isOpen={isOpen}>
      <h2>Meu carrinho</h2>
      
      {cartItems.length !== 0 
      ? cartItems.map(item => (
        <CartItem key={item.id}>
          <img src={item.src} alt="Item foto"></img>
          <div className="info">
            <strong>{item.name}</strong>
            <span>{item.price}</span>
          </div>
        </CartItem>
      ))
      : <span>Seu carrinho está vazio!</span>
    }

      <div className="footer">
        <h2>TOTAL</h2>
        <h1>R${total}</h1>
        <div className="actions">
          <Button>Finalizar compra</Button>
          <Button onClick={() => setCart(prevState => !prevState)}>Continuar comprando</Button>
        </div>
      </div>
    </Container>
  )
}