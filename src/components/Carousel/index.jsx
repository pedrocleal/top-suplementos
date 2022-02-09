import { Link } from 'react-router-dom';
import { Container, Item } from './styles';

import { supplements } from '../../data/supplements';

export default function Carousel() {
  return (
    <Container>
      {supplements.map((supplement) => (
        <Item key={supplement.id}>
          <img src={supplement.src} alt="Suplemento" />
          <div className="info">
            <h2>{supplement.name}</h2>
            <p>{supplement.desc}</p>
            <Link to={`/products/${supplement.id}`}>Comprar</Link>
          </div>
        </Item>
      ))}
    </Container>
  );
}
