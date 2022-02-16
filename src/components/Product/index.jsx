import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Container } from './styles';

import { Button } from '../Button';

import getSupplement from '../../data/supplements';

import { CartContext } from '../../context/CartContext';

export default function Product({ id }) {
  const product = getSupplement(Number(id));
  const { handleNewCartItem } = useContext(CartContext);
  return (
    <Container>
      <div className="left">
        <img src={product.src} alt="Foto de suplemento" />
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <p>{product.desc}</p>
        <span>
          De:
          {' '}
          {product.price.initialPrice}
        </span>
        <span className="big">
          Por:
          {' '}
          {product.price.discountPrice}
        </span>
        <div className="actions">
          <Button>Comprar</Button>
          <Button className="cart" onClick={() => handleNewCartItem(product)}>+Carrinho</Button>
        </div>
      </div>
    </Container>
  );
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
};
