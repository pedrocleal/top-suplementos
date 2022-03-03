import { Link, useParams } from 'react-router-dom';

import { useContext } from 'react';
import { Container, Item, NotFound } from './styles';
import { Button } from '../Button';

import arrow from '../../assets/images/icons/arrow-left.svg';
import search from '../../assets/images/icons/search-not-found.svg';

import { supplements } from '../../data/supplements';
import { CartContext } from '../../context/CartContext';

export default function SearchResult() {

  const { searchQuery } = useParams();
  const { handleNewCartItem } = useContext(CartContext);

  const searchResult = supplements.filter(
    (supplement) => supplement.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Voltar" />
        <span>Voltar</span>
      </Link>
      <h3>
        Resultados da pesquisa:
        {' '}
        {searchQuery}
      </h3>
      <div className="result">
        { searchResult.length > 0
          ? searchResult.map((supplement) => (
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
          ))
          : (
            <NotFound>
              <h1>Eita!</h1>
              <h3>Não temos esse item :(</h3>
              <img src={search} alt="Não encontrado" />
              <Link to="/">Voltar para a Home</Link>
            </NotFound>
          )}
      </div>
    </Container>
  );
}
