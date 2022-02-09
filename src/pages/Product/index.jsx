import { useParams, Link } from 'react-router-dom';
import Productt from '../../components/Product';

import { Container } from './styles';

import arrow from '../../assets/images/icons/arrow-left.svg';

export default function Product() {
  const { productId } = useParams();
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Voltar" />
        <span>Voltar</span>
      </Link>
      <Productt id={productId} />
    </Container>
  );
}
