import { Container, Grid, Item } from './styles';
import { Button } from '../Button'

import { supplements } from '../../data/supplements' 

import { CartContext } from '../App';
import { useContext } from 'react';

export default function ListItems() {

  const { cartItems, setCartItems } = useContext(CartContext);

  console.log(cartItems);

  function handleNewCartItem(item) {
    setCartItems(prevState => [
      {
        id: item.id,
        src: item.src,
        name: item.name,
        price: item.price.discountPrice,
      },
      ...prevState
    ]);
  }

  return (
    <Container>
      <h1>Nossos suplementos</h1>
      <Grid>
        {supplements.map(supplement => (
          <Item key={supplement.id}>
            <div className='header'>
              <img src={supplement.src} alt="Imagem de suplemento" />
            </div>
            <div className='product-info'>
              <h3>{supplement.name}</h3>
              <p>{supplement.desc}</p>
              <div className='price'>
                <span>De: <strong>{supplement.price.initialPrice}</strong></span>
                <span>Por: <strong>{supplement.price.discountPrice}</strong></span>
              </div>
              <div className='actions'>
                <Button>Ver mais</Button>
                <Button onClick={() => handleNewCartItem(supplement)}>+Carrinho</Button>
              </div>
          </div>
        </Item>
        ))}
      </Grid>
    </Container>
  )
}