import { Container } from './styles';

import FilterItems from '../../components/FilterItems';
import ListItems from '../../components/ListItems';

export default function Products() {
  return (
    <Container>
      <FilterItems />
      <ListItems />
    </Container>
  );
}
