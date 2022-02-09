import { Link } from 'react-router-dom';
import { Container, LinkContainer } from './styles';

export default function ItemsNavigation() {
  return (
    <Container>
      <LinkContainer>
        <Link
          to="/products"
        >
          TOP 5
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link
          to="/products"
        >
          WHEY PROTEIN
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link
          to="/products"
        >
          CREATINAS
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link
          to="/products"
        >
          TERMOGÊNICOS
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link
          to="/products"
        >
          PRÉ-TREINO
        </Link>
      </LinkContainer>

      <LinkContainer>
        <Link
          to="/products"
        >
          OUTROS
        </Link>
      </LinkContainer>

    </Container>
  );
}
