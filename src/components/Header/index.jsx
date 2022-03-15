import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icons/Logo.svg';
import cartIcon from '../../assets/images/icons/Carrinho.svg';
import searchIcon from '../../assets/images/icons/Search.svg';
import {
  Container, SearchContainer, SearchInput, CartContainer,
} from './styles';

import Cart from '../Cart';

import { CartContext } from '../../context/CartContext';

export default function Header() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState(false);

  const { cartItems } = useContext(CartContext);

  const itemsCounter = cartItems.length;

  return (
    <>
      <Cart isOpen={cart} setCart={setCart} />
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <SearchContainer>
          <SearchInput
            placeholder="Encontre um suplemento"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <Link to={`/search/${search}`} type="submit">
            <img src={searchIcon} alt="Pesquisar" />
          </Link>
        </SearchContainer>

        <CartContainer onClick={() => setCart((prevState) => !prevState)}>
          <img src={cartIcon} alt="Carrinho" />
          <span>{itemsCounter}</span>
        </CartContainer>
      </Container>
    </>
  );
}
