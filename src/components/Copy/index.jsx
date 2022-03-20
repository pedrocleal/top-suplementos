import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Copy() {
  return (
    <Container>
      <Link to="/products">
        Os melhores suplementos estão
        {' '}
        <strong>AQUI</strong>
        !
      </Link>
    </Container>
  );
}
