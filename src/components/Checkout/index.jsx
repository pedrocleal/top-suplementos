import {
  useContext, useRef, useState, useEffect,
} from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  Container, ListCartItems, Item, FreteContainer,
} from './styles';

import { CartContext } from '../../context/CartContext';
import { Button } from '../Button';

import formatCep from '../../utils/formatCep';
import delay from '../../utils/delay';
import Loader from '../Loader';
import Success from '../Success';

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFinish, setIsFinish] = useState(false);
  const [cep, setCep] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [adress, setAdress] = useState('');
  const firstFreteOption = useRef(null);
  const secondFreteOption = useRef(null);

  useEffect(async () => {
    await delay(300);
    setIsLoading(false);
  }, []);

  const {
    cartItems, handleItemsCounterMinus, handleItemsCounterPlus, handleDeleteCartItem, total,
  } = useContext(CartContext);

  const isButtonDisabled = cartItems.length === 0 || !cep || !totalAmount;
  console.log(isButtonDisabled);

  function getTotalValue(subtotal) {
    const parsedString = Number(subtotal.replace(',', '.'));
    const formatFirstValue = Number(firstFreteOption.current.value).toFixed(2);
    const formatSecondValue = Number(secondFreteOption.current.value).toFixed(2);

    if (firstFreteOption.current.checked) {
      return setTotalAmount(String(parsedString + Number(formatFirstValue)));
    }
    return setTotalAmount(String(parsedString + Number(formatSecondValue)));
  }

  async function handleCepSearch() {
    setIsLoading(true);
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(async (res) => {
        await delay(500);
        const data = await res.json();
        setAdress(`${data.logradouro}, ${data.localidade} - ${data.bairro}`);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  return (
    <Container>
      {isLoading && <Loader />}
      {isFinish && <Success />}
      <h2>Checkout</h2>
      <ListCartItems>
        {cartItems.map((item) => (
          <Item key={item.id}>
            <img src={item.src} alt="Suplemento" />
            <div className="info">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div className="actions">
                <button type="button" onClick={() => handleItemsCounterMinus(item.id)}><FaMinus /></button>
                <span>{item.counter}</span>
                <button type="button" onClick={() => handleItemsCounterPlus(item.id)}><FaPlus /></button>
                <FiTrash2
                  className="trash"
                  onClick={() => handleDeleteCartItem(item.name)}
                />
              </div>
            </div>
          </Item>
        ))}
      </ListCartItems>
      <span className="subtotal">
        Subtotal:
        {' '}
        <strong>{total}</strong>
      </span>
      <hr />
      <FreteContainer>
        <div className="frete">
          <div className="input">
            <span>Calcule o frete:</span>
            <input
              type="text"
              placeholder="Digite seu cep"
              value={cep}
              onChange={(e) => setCep(formatCep(e.target.value))}
              maxLength={9}
            />
            <button
              type="button"
              onClick={handleCepSearch}
              disabled={!cep}
            >
              Calcular
            </button>
          </div>
          <div className="result">
            Entregar em:
            {' '}
            <strong>{adress}</strong>
          </div>
        </div>
        <div className="select-frete">
          <div>
            <input type="radio" name="frete-option" onClick={() => getTotalValue(total)} ref={firstFreteOption} value={30} />
            11 dias ??teis R$ 30,00 - Op????o 1
          </div>
          <div>
            <input type="radio" name="frete-option" onClick={() => getTotalValue(total)} ref={secondFreteOption} value={50} />
            5 dias ??teis R$ 50,00 - Op????o 2
          </div>
        </div>
      </FreteContainer>
      <h1 className="total">
        Total:
        {' '}
        {totalAmount.replace('.', ',')}
      </h1>
      <div className="buttons">
        <Button disabled={isButtonDisabled} onClick={() => setIsFinish(true)}>Finalizar Compra</Button>
      </div>
    </Container>
  );
}
