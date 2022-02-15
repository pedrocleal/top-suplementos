import PropTypes from 'prop-types';

import { FiTrash2 } from 'react-icons/fi';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Container } from './styles';

export default function CartItem({
  id, src, name, price, onDeleteItem, counter, onItemsCounterMinus, onItemsCounterPlus,
}) {

  const formatPrice = Number(price.replace(',', '.') * counter).toFixed(2);
  const priceOutPut = String(formatPrice.replace('.', ','));

  return (
    <Container>
      <img src={src} alt="Item foto" />
      <div className="info">
        <strong>{name}</strong>
        <span>{counter > 0 ? priceOutPut : 0}</span>
        <div className="actions">
          <button type="button" onClick={() => onItemsCounterMinus(id)}><FaMinus /></button>
          <span>{counter}</span>
          <button type="button" onClick={() => onItemsCounterPlus(id)}><FaPlus /></button>
          <FiTrash2
            className="trash"
            onClick={() => onDeleteItem(name)}
          />
        </div>
      </div>
    </Container>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onItemsCounterPlus: PropTypes.func.isRequired,
  onItemsCounterMinus: PropTypes.func.isRequired,
};
