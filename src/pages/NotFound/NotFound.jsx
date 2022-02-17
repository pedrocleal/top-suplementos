import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <p>Talvez você tenha se perdido.</p>
      <Link to="/">Voltar para a home</Link>
    </Container>
  );
}
