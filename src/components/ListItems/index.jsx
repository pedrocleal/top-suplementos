import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Item } from './styles';
import { Button } from '../Button';

import { supplements } from '../../data/supplements';

import { CartContext } from '../../context/CartContext';

export default function ListItems() {

  const { handleNewCartItem } = useContext(CartContext);

  return (
    <Container>
      <h1>Nossos suplementos</h1>
      <Grid>
        {supplements.map((supplement) => (
          <Item key={supplement.id}>
            <div className="header">
              <img src={supplement.src} alt="Imagem de suplemento" />
            </div>
            <div className="product-info">
              <h3>{supplement.name}</h3>
              <p>{supplement.desc}</p>
              <div className="price">
                <span>
                  De:
                  {' '}
                  <strong>{supplement.price.initialPrice}</strong>
                </span>
                <span>
                  Por:
                  {' '}
                  <strong>{supplement.price.discountPrice}</strong>
                </span>
              </div>
              <div className="actions">
                <Link to={`/products/${supplement.id}`}>Ver mais</Link>
                <Button onClick={() => handleNewCartItem(supplement)}>+Carrinho</Button>
              </div>
            </div>
          </Item>
        ))}
      </Grid>
    </Container>
  );
}
